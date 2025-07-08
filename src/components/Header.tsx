'use client'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-[hsl(209,23%,22%)]">
      <h1 className="text-xl font-extrabold">Where in the world?</h1>
      <ThemeToggle />
    </header>
  )
}
