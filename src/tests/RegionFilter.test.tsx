import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegionFilter from '@/components/RegionFilter' // Ajusta según tu ruta

describe('RegionFilter', () => {
  it('dispara el evento onChange cuando se selecciona una región', async () => {
    const handleChange = jest.fn()
    render(<RegionFilter value="" onChange={handleChange} />)

    // 1. Clic en el botón para abrir el dropdown
    const button = screen.getByRole('button', { name: /filter by region/i })
    await userEvent.click(button)

    // 2. Esperar a que aparezca la opción
    const americasOption = await screen.findByText((content, element) =>
      element?.tagName.toLowerCase() === 'div' && content === 'Americas'
    )

    // 3. Clic en la opción
    await userEvent.click(americasOption)

    // 4. Verificación
    expect(handleChange).toHaveBeenCalledWith('Americas')
  })
})
