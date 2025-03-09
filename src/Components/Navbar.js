'use client'

import { usePathname } from 'next/navigation'
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const navLinks = [
  { href: '/venue', name: 'Venue' },
  { href: '/agenda', name: 'Agenda' },
  { href: '/photos', name: 'Photos' },
  { href: '/registry', name: 'Registry' },
  { href: '/qna', name: 'Q&A' },
]


export default function Navigation() {
  const pathname = usePathname()
  const [navActive, setNavActive] = useState(null);
  return (
    <div style={{ justifyContent: "space-between" }} className={`${navActive ? "bg-teal-950" : "bg-black"} w-full fixed top-0 left-0 z-40 py-4 md:py-2 px-6 flex justify-between`}>
      <a href="/home" style={{ alignContent: 'center', zIndex:50 }}>
        <Image src={"/images/isabella_n_daniel.svg"}
          loading="lazy"
          alt="logo"
          height={230}
          width={230}
        />
      </a>
      <div className="text-white mobile_only z_50" >
        <button
          onClick={() => setNavActive(!navActive)}
          className='z_50'
        >
          {navActive ?
            <Image src={"/images/cross.svg"}
              loading="lazy"
              alt="logo"
              height={28}
              width={28} /> :
            <Image src={"/images/menu.svg"}
              loading="lazy"
              alt="logo"
              height={28}
              width={28} />}
        </button>
      </div>
      <div className="text-white flex desktop_only">
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

      {navActive ? <div className="bg-gradient nav_anime text-white flex flex-col mobile_only fixed left-0 top-0 w-full p-20 mt-12 z_50">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              className={`${isActive ? "nav_link_active" : "nav_link"} text-center`}
              href={link.href}
              key={link.name}
              onClick={() => setNavActive(!navActive)}
            >
              {link.name}
            </Link>
          )
        })}
      </div> : null}
    </div>
  )
}