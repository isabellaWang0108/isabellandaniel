import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isabella_n_daniel',
  description: 'A website about Isabella and Daniel',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
