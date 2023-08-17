import Image from 'next/image'
import Link from 'next/link'

const Photo = () => {
  return (
    <div className="bg-black w-full grid justify-items-center">
      <div className="py-20 md:py-40 px-5 w-full max-w-screen-md grid gap-4">
        <div className="relative w-full h-60 md:h-[32rem] aspect-auto">
          <Image src={"/images/img_2.png"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="no-download z-10"
            fill={true} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative h-[38rem] aspect-auto">
            <Image src={"/images/img_3.png"}
              loading="lazy"
              alt="hero image"
              objectFit="cover"
              className="no-download z-10"
              fill={true} />
          </div>
          <div className="relative md:pt-2 h-[38rem] aspect-auto">
            <Image src={"/images/img_4.png"}
              loading="lazy"
              alt="hero image"
              objectFit="cover"
              className="no-download z-10"
              fill={true} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative h-[38rem] aspect-auto">
            <Image src={"/images/img_5.png"}
              loading="lazy"
              alt="hero image"
              objectFit="cover"
              className="no-download z-10"
              fill={true} />
          </div>
        </div>
        <div className="relative w-full h-60 md:h-[32rem] aspect-auto z-40 z-10">
          <Image src={"/images/img_6.png"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="no-download z-10"
            fill={true} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative h-[38rem] aspect-auto">
            <Image src={"/images/img_7.png"}
              loading="lazy"
              alt="hero image"
              objectFit="cover"
              className="no-download z-10"
              fill={true} />
          </div>
          <div className="relative md:pt-2 h-[38rem] aspect-auto">
            <Image src={"/images/img_8.png"}
              loading="lazy"
              alt="hero image"
              objectFit="cover"
              className="no-download z-10"
              fill={true} />
          </div>
        </div>
        <div className="relative w-full h-60 md:h-[32rem] aspect-auto z-40 z-10">
          <Image src={"/images/img_1.png"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="no-download z-10"
            fill={true} />
        </div>

      </div>

    </div>
  )
}

export default Photo;
