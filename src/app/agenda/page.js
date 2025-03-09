import Image from 'next/image'
import Link from 'next/link'

const Agenda = () => {
  return (
    <div className="bg-black w-full grid justify-items-center z-10">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden">
          <h1 className="display exception mb-8">
            Agenda
          </h1>

          <div className="w-full text-white grid grid-row">
          <p>6:15 PM – 6:30 PM | Arrival</p>
            <p >Please see  <Link href="/venue" className="underline">venue page</Link> for more details.</p>
            <br />
            <p>6:30 PM – 7:30 PM | Cocktail hour</p>
            <p >You will enjoy cocktail and passed hors d&apos;oeuvres at Madagascar or sea lion pool.</p>
            <br />
            <p>7:30 PM – 7:45 PM | Getting seated at reception</p>
            <p >You will find your seat at Schiff Family Great Hall</p>
            <br />
            <p>7:45 PM – 11:15 PM | Reception</p>
            <p >There will be plated meals, open bar, and reception activities. </p>
            <br />
            <p>11:15 PM | Last call</p>
            <p >You will grab your last drink. </p>
            <br />
            <p>11:30 PM | The end</p>
            <p >The party will end on time.  </p>
            <br />
          </div>
        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Agenda;
