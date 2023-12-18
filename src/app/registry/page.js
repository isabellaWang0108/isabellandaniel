import Image from 'next/image'
import Link from 'next/link'

const Registry = () => {
  return (
    <div className="bg-black w-full grid justify-items-center z-10">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden max-w-screen-md">
          <h1 className="display exception mb-8">
            Registry
          </h1>
          <p>To those who wish to honor us with a gift, we would be incredibly grateful for a contribution towards our future goals and dreams. 
          <br /><br />As we currently reside in a small apartment that has been lovingly furnished with all the essentials, we kindly request that you refrain from sending household items. 
          <br /><br />Your support in helping us build our future together, whether it be a part of our honeymoon, a down payment for our next home, or an investment in our future endeavors, will be deeply appreciated and a cherished part of our journey together.</p>
          <br />
          <p>If you are considering a gift, we have set up a cash registry:</p>
          <br />
          <ul className="list-disc">
            <li> <p>&#9679; Check: To Daniel Ogorchock & Isabella Wang. </p></li>
            <li> <p>&#9679; Cash: Registry box at the venue. </p></li>
            <li> <p>&#9679; Venmo: @Isabella-Wang-2 or @Daniel-Ogorchock</p></li>
          </ul>
          <br />
          <p> Your generosity will be a meaningful part of our next steps as a married couple.</p>

        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Registry;
