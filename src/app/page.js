// 'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="flex fixed top-0 left-0 w-screen h-screen z-50 grain">
        <div className="bg-black relative md:w-full w-0 h-screen"> </div>
        <div className="relative md:w-4/12 w-full h-screen aspect-auto">
          <Image src={"/images/hero.jpg"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="brightness-90 md:brightness-100 no-download"
            fill={true} />
        </div>
      </div>
      <div className="md:w-3/4 w-full h-full fixed z-50 grid justify-items-center">
        <div
          className="flex-col absolute md:w-200 my-auto text-white landing_title_block">
          <h1 className="display mb-8">
            Daniel.Ogorchock
            <div className="my-2"/>
            & Isabella.Wang&apos;s
            <div className="my-2"/>
            Wedding Invite <span className="cursor_horizontal" /> </h1>

          <Link href="/home">
            <div className="w-full text-center button mb-8">
              Open your invite
            </div>
          </Link>

        </div>
      </div>

    </>
  )
}
