import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../Components/Navbar.js'
const About = () => {
  const today = new Date()
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return (
    <>
      <div className="bg-black w-full grid justify-items-center z-10 mt-10 md:mt-0">
        <div className="relative w-full md:w-1/3 md:ml-20 justify-self-center h-80 aspect-auto mobile_only">
          <Image src={"/images/birds.svg"}
            loading="lazy"
            alt="hero image"
            objectFit="cover"
            className="no-download"
            fill={true} />
        </div>
        <div className="bg-black p-6 md:p-10 md:my-40 max-w-screen-lg golden_shadow text-white">
          <h2 className="title mb-8">Our journey</h2>
          <div className="flex mb-4">
            <code>[journey@isabellandaniel ~] $ dmesg | grep “relationship milestones”</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">00</code>
            <code className="col-span-2">2021-04-08</code>
            <code className="col-span-9">Daniel and Isabella got matched on Coffee Meets Bagel.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">01</code>
            <code className="col-span-2">2021-04-09</code>
            <code className="col-span-9">Daniel chose to keep seeing others.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">02</code>
            <code className="col-span-2">2021-08-20</code>
            <code className="col-span-9">Daniel and Isabella got matched again on Coffee Meets Bagel.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">03</code>
            <code className="col-span-2">2021-08-21</code>
            <code className="col-span-9">Isabella initiated the conversation.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">04</code>
            <code className="col-span-2">2021-08-25 </code>
            <code className="col-span-9">Daniel asked Isabella out. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">05</code>
            <code className="col-span-2">2021-09-10 </code>
            <code className="col-span-9">Daniel and Isabella met in person at Valerie. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">06</code>
            <code className="col-span-2"> 2021-10-01</code>
            <code className="col-span-9">Isabella friend-zoned Daniel. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">07</code>
            <code className="col-span-2">2021-11-06 </code>
            <code className="col-span-9">Isabella asked Daniel out to Bronx zoo. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">08</code>
            <code className="col-span-2">2021-11-06 </code>
            <code className="col-span-9"> Neither Isabella nor Daniel knew if they were on a date.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">09</code>
            <code className="col-span-2"> 2021-12-11</code>
            <code className="col-span-9">Isabella and Daniel went exclusive. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">10</code>
            <code className="col-span-2">2021-12-23</code>
            <code className="col-span-9"> Isabella accidentally called herself Daniel’s girlfriend.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">11</code>
            <code className="col-span-2"> 2021-12-31</code>
            <code className="col-span-9">Isabella and Daniel exchanged I love you. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">12</code>
            <code className="col-span-2"> 2022-02-18</code>
            <code className="col-span-9"> Isabella and Daniel traveled together the first time to SF.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">13</code>
            <code className="col-span-2">2022-06-03 </code>
            <code className="col-span-9">Isabella met Daniel’s entire family. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">14</code>
            <code className="col-span-2"> 2023-03-31</code>
            <code className="col-span-9">Daniel proposed to Isabella.</code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">15</code>
            <code className="col-span-2"> 2023-06-26</code>
            <code className="col-span-9">Daniel moved in with Isabella. </code>
          </div>
          <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
            <code className="desktop_only">16</code>
            <code className="col-span-2">{year}-{month < 10 ? '0' + month : month}-{date < 10 ? '0' + date : date} </code>
            <code className="col-span-9"> Wala! Here we are.</code>
          </div>
          <div className="flex mb-4">
            <code>[journey@isabellandaniel ~] $ You can’t really type here_<div className="cursor"></div></code>
          </div>
        </div>

      </div>
    </>
  )
}

export default About;
