'use client'
import { Country } from '@/types/country'
import Link from 'next/link'

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link href={`/country/${country.cca3}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-[hsl(0,0%,100%)] dark:bg-[hsl(209,23%,22%)] text-[hsl(200,15%,8%)] dark:text-white cursor-pointer">
        
        {/* Imagen */}
        <div className="w-full aspect-[3/2]">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="p-6 space-y-2">
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0]}
          </p>
        </div>
      </div>
    </Link>
  )
}
