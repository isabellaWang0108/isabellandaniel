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
            <div className="my-6" />As we currently reside in a small apartment that has been lovingly furnished with all the essentials, we kindly request that you refrain from sending household items.
            <div className="my-6" />Your support in helping us build our future together, whether it be a part of our honeymoon, a down payment for our next home, or an investment in our future endeavors, will be deeply appreciated and a cherished part of our journey together.</p>

          <p>If you are considering a gift, we have set up a cash registry:</p>
          <div className="my-6" />
          <ul className="list-disc list-inside">
            <p><li> Check: To Daniel Ogorchock & Isabella Wang </li></p>
            <p><li> Cash: Registry box at the venue </li></p>
          </ul>
          <div className="my-6" />
          <p>If you prefer to do it digitally:</p>
          <div className="my-6" />
          <ul className="list-disc list-inside">
            <p><li> Venmo: @Isabella-Wang-2 or @Daniel-Ogorchock</li> </p>
            <p><li> PayPal: @IsabellaWang0108 </li> </p>
            <p><li> Zelle: wangxbella0108@gmail.com </li> </p>
            <p><li> BitCoin: ??? </li> </p>
          </ul>
          <div className="my-6" />
          <p> Your generosity will be a meaningful part of our next steps as a married couple.</p>

        </div>
      </div>
      <div className="my-80"></div>
    </div>
  )
}

export default Registry;
