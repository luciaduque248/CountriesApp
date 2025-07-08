import { fetchCountryByCode, fetchCountriesByCodes } from '@/lib/api'
import { Country } from '@/types/country'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function CountryPage({ params }: { params: { code: string } }) {
  const country: Country = await fetchCountryByCode(params.code)

  const nativeName =
    country.name.nativeName &&
    Object.values(country.name.nativeName)[0]?.common

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A'

  const borderCodes = country.borders || []
  const borderCountries =
    borderCodes.length > 0
      ? await fetchCountriesByCodes(borderCodes)
      : []

  return (
    <main className="bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)] dark:bg-[hsl(207,26%,17%)] dark:text-white min-h-screen px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-800 shadow-md rounded dark:bg-[hsl(209,23%,22%)] dark:text-white dark:shadow-sm transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="w-full max-w-md mx-auto">
  <img
    src={country.flags.svg}
    alt={country.name.common}
    className="w-full h-60 object-cover rounded shadow"
  />
</div>


        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            </div>
            <div className="space-y-2">
              <p><strong>Languages:</strong> {languages}</p>
              <p><strong>Top Level Domain:</strong> {country.tld?.[0]}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="mt-8">
              <p className="font-semibold mb-2">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((b: Country) => (
                  <Link
                    href={`/country/${b.cca3}`}
                    key={b.cca3}
                    className="bg-white text-gray-900 dark:bg-[hsl(209,23%,22%)] dark:text-white px-3 py-1 rounded shadow text-sm"
                  >
                    {b.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
