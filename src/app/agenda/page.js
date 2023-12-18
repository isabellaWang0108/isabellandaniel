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
          <p>Full agenda will be released two weeks before the wedding. </p>
        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Agenda;
