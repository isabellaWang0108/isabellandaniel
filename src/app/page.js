import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex fixed top-0 left-0 w-screen h-screen z-20 grain">
        <div className="bg-black relative md:w-full w-0 h-screen z-30 "> </div>
        <div className="relative md:w-4/12 w-full h-screen aspect-auto z-40 ">
          <Image src={"/images/hero.jpg"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="brightness-50 md:brightness-100 no-download"
            fill={true} />
        </div>
      </div>
      <div className="md:w-3/4 w-full h-full fixed z-50 grid justify-items-center">
        <div
          className="flex-col absolute w-200 my-auto text-white place-items-center-browser-bug">
          <h1 className="display mb-8">Isabella
            <br /> Daniel_</h1>


          <Link href="/about">
            <div className="w-full text-center button mb-8">
              About Us
            </div>
          </Link>

          {/*  <Link href="/about">
             <div className="w-full text-center button secondary mb-8">
               RSVP
             </div> 
          </Link>*/}

        </div>
      </div>

    </>
  )
}
