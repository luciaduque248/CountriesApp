'use client'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="mr-2" />
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}
