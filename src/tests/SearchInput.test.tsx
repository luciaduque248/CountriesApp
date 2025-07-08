import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from '@/components/SearchInput'


describe('SearchInput', () => {
  it('renderiza el input correctamente', () => {
    render(<SearchInput value="" onChange={() => {}} />)
    const input = screen.getByPlaceholderText(/Search for a country/i)
    expect(input).toBeInTheDocument()
  })

  it('dispara el evento onChange al escribir', () => {
    const handleChange = jest.fn()
    render(<SearchInput value="" onChange={handleChange} />)
    const input = screen.getByPlaceholderText(/Search for a country/i)
    fireEvent.change(input, { target: { value: 'colombia' } })
    expect(handleChange).toHaveBeenCalledWith('colombia')
  })
})
