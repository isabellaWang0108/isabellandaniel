import Image from 'next/image'
import Link from 'next/link'

const QNA = () => {
  return (
    <div className="bg-black w-full grid justify-items-center z-10 text-white">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden max-w-screen-lg">
          <h1 className="display exception mbs-10">
            Q&A
          </h1>
          <div className="my-14"></div>
          <div className="title mb-4">How do I address you two on letters or cards?</div>
          <p>Isabella Wang and Daniel Ogorchock.</p>
          <div className="my-14"></div>
          <div className="title mb-4">Any age limit?</div>
          <p>Adults (18+) only. We have R-rated content in our wedding.</p>
          <div className="my-14"></div>
          <div className="title mb-4">Can I bring children to your wedding?</div>
          <p>Unfortunately, no.</p>

          <div className="my-14"></div>
          <div className="title mb-4">Dress code?</div>
          <p>Colorful, formal.
            <br />
            If you want inspirations, check out the <a href="https://pin.it/3BPl46I" className="underline">mood board</a> we prepared for you.</p>
          <div className="my-14"></div>
          <div className="title mb-4">Will the event take place indoors or outdoors?</div>
          <p>Cocktail hour will take place both indoor and outdoor. See  <Link href="/venue" className="underline">venue</Link> for more info.
            <br />
            Reception will only take place indoors.</p>
          <div className="my-14"></div>
          <div className="title mb-4">Will there be drinks?</div>
          <p>Yes! We have an open bar for 5 hours.</p>
          <div className="my-14"></div>
          <div className="title mb-4">Where is your ceremony?</div>
          <p> It took place on Oct 26th 2023.
            <br />You will have to travel back in time. </p>
          <div className="my-14"></div>
          <div className="title mb-4">Where can I give feedback about this website?</div>
          <p> You should keep your complaints a secret.
            <br />This web design is all about someone&apos;s personal opinion. </p>
        </div>
      </div>
      <div className="my-40"></div>
    </div>
  )
}

export default QNA;
