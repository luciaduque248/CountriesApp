// src/app/layout.tsx
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Country Explorer',
  description: 'Frontend Challenge - REST Countries with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

