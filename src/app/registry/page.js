import Image from 'next/image'
import Link from 'next/link'

const Registry = () => {
  return (
    <div className="bg-black w-full grid justify-items-center z-10">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden">
          <h1 className="display exception mb-8">
            Registry
          </h1>
          <p>Shamelessly speaking, we like cash, everybody likes cash. </p>
          <p> We already have a fully furnished apartment, so the most appreciated gifts are checks, cash, Venmo. &#10084; &#10084; &#10084;</p>
          <br />
          <p>Venmo: @Isabella-Wang-2</p>
          <p>Check: To Daniel Ogorchock and Isabella Wang</p>
        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Registry;
