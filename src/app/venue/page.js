import Image from 'next/image'
import Link from 'next/link'

const Venue = () => {
  return (
    <div className="bg-black w-full grid justify-items-center z-10">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden">
          <h1 className="display exception mb-8">
            Venue - Bronx zoo
          </h1>
          <div className="title">2300 Southern Boulevard,
            <br />
            Bronx, NY 10460.
          </div>
          <br />
          <p>The wedding will take place at Bronx zoo. Below is a map of the zoo and where the event will take place.</p>
          <br />
          <Image src={"/images/zoo_map.png"}
            loading="lazy"
            alt="hero image"
            width={800}
            height={800}
          />

          <div className="title mt-14 mb-2">
            How to get there
          </div>

          <p>It is always recommended to take public transit. You can search <a target="_blank" href="https://www.google.com/maps/place/Southern+Boulevard+Gate,+Bronx,+NY+10460/@40.8473706,-73.8906773,14.19z/data=!4m6!3m5!1s0x89c2f485cb0ea1f9:0xf42ec597a1133f55!8m2!3d40.8515951!4d-73.8818513!16s%2Fg%2F11t6hscj9k?entry=ttu" className="underline">Southern Boulevard Gate</a> on Google/Apple Map and see the recommended route from your location.</p>
          <br />
          <div className="title mt-10 mb-2">
            Public transport
          </div>
          <p>Below is a list of public transport that takes you close to the gate.</p>
          <br />
          <ul className="list-disc">
            <li> <p>&#9679; Bx9 or Bx19 buses to 183rd Street and Southern Blvd </p></li>
            <li> <p>&#9679; Train 2 or 5 to West Farms Sq-E Tremont Av</p></li>
            <li> <p>&#9679; Metro North's Harlem line to Fordham, then take the Bx9 bus eastward to 183rd Street and Southern Blvd.</p></li>
          </ul>
          <br />
          <p>Please note, each public transport will end with a short walk to the destination, ranging from 5min - 15min. </p>
          <br />
          <div className="title mt-10 mb-2">
            Driving
          </div>
          <p>
            Please plug the following address into your GPS unit and follow its direction:
            <br />
            2300 Southern Boulevard,
            <br />
            Bronx, NY 10460.
          </p>
          <br />
          <p className="mb-8" >Free parking is only available at the Southern Boulevard lot (Southern Blvd. Parking Lot C). All other gates are locked & not accessible.
          </p>

          <div className="title mt-10 mb-2">
            Uber or Lyft
          </div>
          <p>You can always call Uber or Lyft to the location. It is ubiquitous in NYC. </p>
          <br />

        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Venue;
