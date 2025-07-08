'use client'

import { useEffect, useState } from 'react'
import { fetchCountries } from '@/lib/api'
import { Country } from '@/types/country'
import CountryCard from '@/components/CountryCard'
import SearchInput from '@/components/SearchInput'
import RegionFilter from '@/components/RegionFilter'

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [filtered, setFiltered] = useState<Country[]>([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountries()
      setCountries(data)
      setFiltered(data)
    }
    getData()
  }, [])

  useEffect(() => {
    let result = countries

    if (region) {
      result = result.filter(
        (c) => c.region.toLowerCase() === region.toLowerCase()
      )
    }

    if (search) {
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFiltered(result)
  }, [search, region, countries])

  const noResults = filtered.length === 0

  return (
    <main>
      <section className="px-6 py-8 bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)] min-h-screen transition-colors">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-10">
          <SearchInput value={search} onChange={(val) => setSearch(val)} />
          <RegionFilter value={region} onChange={(val) => setRegion(val)} />
        </div>

        {noResults ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            {region && search ? (
              <>
                No countries found matching <strong>{search}</strong> in region{' '}
                <strong>{region}</strong>.
              </>
            ) : search ? (
              <>
                No countries found matching <strong>{search}</strong>.
              </>
            ) : region ? (
              <>
                No countries found in region <strong>{region}</strong>.
              </>
            ) : (
              <>No countries found.</>
            )}
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((country) => (
              <CountryCard key={country.cca2} country={country} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
