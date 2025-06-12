import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ui/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO App',
  description: 'A simple TODO list app with auth and CRUD.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
