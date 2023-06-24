'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/themeProvider'
import { BudgetsProvider } from "../contexts/BudgetsContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exprense Tracker',
  description: 'Save and check your expenses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BudgetsProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </BudgetsProvider>
      </body>
    </html>
  )
}
