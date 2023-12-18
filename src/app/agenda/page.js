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
          <p>Full agenda will be released two weeks before the wedding. 
            <br/>Below is the general timeline. </p>
          <br />
          <div className="w-full text-white grid grid-row">
            <p>6:30 PM – 7:30 PM | Cocktail hour</p>
            <p >Madagascar & sea lion pool</p>
            <br />
            <p>7:30 PM – 11:30 PM | Reception</p>
            <p >Schiff Family Great Hall</p>
            <br />
          </div>
        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Agenda;
