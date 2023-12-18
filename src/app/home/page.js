import Image from 'next/image'
import React from 'react';
import Link from 'next/link'

const Home = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Format the date as a string (e.g., "December 13, 2023")
  const dateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/New_York',
    formatMatcher: 'basic'
  });

  return (
    <div className="bg-black w-full grid justify-items-center z-10">
      <div className="md:w-3/4 w-full z-10 grid mt-28 p-6">
        <div className="flex-row my-auto text-white overflow-hidden">
          <h1 className="display exception mb-8">
            Welcome to our<br />
            Belated wedding:
            <br />
            Sat May 17, 2025, Bronx zoo  <span className="cursor_horizontal" />
          </h1>
          <p> Please let us know your likelihood to be there!</p>
          <p> RSVP will open in 2025 for those responded. </p>
          <div className="md:w-1/3 w-full my-6">

            <Link href="https://forms.gle/vg71BERejVGkKTyq9">
              <div className="text-center button mb-8">
                Yes, No, Maybe?
              </div>
            </Link>

          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-3/4 p-6">
        <div className="relative w-full aspect-auto mb-8 md:mb-0">
          <Image src={"/images/birds.svg"}
            loading="lazy"
            alt="hero image"
            className="no-download"
            width={1000}
            height={1000} />
        </div>
        <div className="w-full text-white grid grid-row">
          <h2 className="title mb-8">Schedule</h2>
          <p>6:30 PM – 7:30 PM | Cocktail hour</p>
          <p >Madagascar & sea lion pool</p>
          <br />
          <p>7:30 PM – 11:30 PM | Reception</p>
          <p >Schiff Family Great Hall</p>
          <br />
          <div className="flex flex-row w-full">
            <Link href="/venue" className="mr-6">
              <div className="text-center button mb-8 secondary">
                About venue
              </div>
            </Link>
            <Link href="/agenda">
              <div className="text-center button mb-8 secondary">
                Full agenda
              </div>
            </Link>
          </div>

        </div>

      </div>

      <div className="bg-black p-6 md:p-16 w-full md:my-28 md:w-3/4 max-w-screen-lg golden_shadow text-white">
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
          <code className="col-span-2"> 2023-08-15</code>
          <code className="col-span-9">The MVP of this website is deployed. </code>
        </div>
        <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
          <code className="desktop_only">17</code>
          <code className="col-span-2"> 2023-10-26</code>
          <code className="col-span-9">Isabella n daniel got legally married. </code>
        </div>

        <div className="grid grid-row md:grid-cols-12 md:gap-8 mb-4">
          <code className="desktop_only">18</code>
          <code className="col-span-2"> {dateString.split("/")[2] + "-" + dateString.split("/")[0] + "-" + dateString.split("/")[1]} </code>
          <code className="col-span-9"> Voila! Here we go.</code>
        </div>
        <div className="flex mb-4">
          <code>[journey@isabellandaniel ~] $ You can’t really type here_<div className="cursor"></div></code>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-3/4 p-6 text-white">
        <h2 className="title">Wedding Q&A</h2>
        <br />
        <p>Q: How do I address you two on letters or cards?</p>
        <p>A: Mrs. Wang and Mr. Ogorchock.</p>
        <br />
        <p> Q: Can I bring children to your wedding?</p>
        <p>A: No. We will have R-rated content in our wedding, so adults (18+) only.</p>
        <br />
        <p> Q: What’s the dress code?</p>
        <p> A: Formal. MAX COLOR!</p>
        <br />
        <Link href="/qna" className="md:w-1/3 w-full">
          <div className="text-center button mb-8 secondary">
            Read more
          </div>
        </Link>
      </div>


      <div className="flex flex-col w-full md:w-3/4 p-6 text-white my-10">
        <h2 className="title">Our photos</h2>
        <br />
        <p>We are shy, so we don&apos;t want photos on our home page. </p>
        <p>
          If you insist,
          please <Link href="/photo" className="underline">click here</Link> to see pictures.</p>
      </div>

      <div className="flex flex-col w-full md:w-3/4 p-6 text-white md:mb-10">
        <h2 className="title">Registry</h2>
        <br />
        <p>Shamelessly saying, we like cash, everybody likes cash. </p>
        <p> We already have a fully furnished apartment, so checks, cash, Venmo are always appreciated &#10084; &#10084; &#10084;.</p>
        <br />
        <Link href="/registry" className="md:w-1/3 w-full">
          <div className="text-center button mb-8 secondary">
            How to send cash
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-full md:w-3/4 text-white md:mb-10">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqYw6yERueyOh5MCgQ52cHtVheq90Pv_f_qlGRNdSJHQsDjg/viewform?embedded=true" width="640" height="1169" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>

      <div className="title text-white my-40 p-6"> That said, we are looking forward to seeing you &#128513;.
        <br /><br />
        The end.
      </div>

      <div className="my-40"></div>
    </div >
  )
}

export default Home;
