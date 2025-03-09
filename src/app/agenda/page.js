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
            <p className="mt-2">6:15 PM – 6:30 PM | Arrival</p>
            <p >Please see the <Link href="/venue" className="underline">venue page</Link> for more details.</p>
    
            <p className="mt-6">6:30 PM – 7:30 PM | Cocktail hour</p>
            <p  >You will enjoy cocktails and passed hors d&apos;oeuvres at the Madagascar exhibit or sea lion pool.</p>
    
            <p className="mt-6">7:30 PM – 7:45 PM | Getting seated at reception</p>
            <p >You will find your seat at the Schiff Family Great Hall.</p>
    
            <p className="mt-6">7:45 PM – 11:15 PM | Reception</p>
            <p >There will be plated meals, an open bar, and reception activities. </p>
    
            <p className="mt-6">11:15 PM | Last call</p>
            <p >You will grab your last drink. </p>
    
            <p className="mt-6">11:30 PM | The end</p>
            <p >The party will end on time.  </p>
    
          </div>
        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Agenda;
