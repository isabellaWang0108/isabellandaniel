import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../Components/Navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isabella_n_daniel',
  description: 'A website about Isabella and Daniel',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">

<Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
