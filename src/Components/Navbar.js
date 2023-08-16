'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/about', name: 'About Us' },
  { href: '/photos', name: 'Photos' },
]


export default function Navigation() {
  const pathname = usePathname()

  return (
      <div className="w-full fixed top-0 left-0 z-100 bg-black py-2 px-6 flex justify-between">
        <a href="/">
          <Image src={"/images/logo.svg"}
            loading="lazy"
            alt="logo"
            height={28}
            width={28} />
        </a>
        <div className="text-white flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                className={isActive ? 'nav_link_active' : 'nav_link'}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
  )
}