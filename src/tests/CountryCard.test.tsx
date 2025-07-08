import { render, screen } from '@testing-library/react'
import CountryCard from '@/components/CountryCard'
import { Country } from '@/types/country'

const mockCountry: Country = {
  name: {
    common: 'Colombia',
    official: 'Republic of Colombia',
  },
  population: 50000000,
  region: 'Americas',
  capital: ['Bogotá'],
  flags: {
    svg: 'https://flagcdn.com/co.svg',
    png: 'https://flagcdn.com/w320/co.png',
    alt: 'Flag of Colombia',
  },
  cca3: 'COL',
  cca2: 'CO',
}

describe('CountryCard', () => {
  it('renderiza correctamente los datos del país', () => {
    render(<CountryCard country={mockCountry} />)
    expect(screen.getByText('Colombia')).toBeInTheDocument()
    expect(screen.getByText(/Bogotá/)).toBeInTheDocument()
    expect(screen.getByText(/Americas/)).toBeInTheDocument()
  })
})
