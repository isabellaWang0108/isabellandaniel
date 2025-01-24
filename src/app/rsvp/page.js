"use client";
// import Link from 'next/link'
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const Rsvp = () => {

//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//   });
//   const [responseMessage, setResponseMessage] = useState('');


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(formData)
//     try {
//       const response = await fetch('/api/rsvp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName.toLowerCase().replace(/\s+/g, ''),
//           lastName: formData.lastName.toLowerCase().replace(/\s+/g, '')
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Navigate to the results page with the data

//         if (data[0].attending === null) {
//           // Navigate to the results page with the data
//           router.push(`/rsvp/selecting_meal?selecting_meal=${encodeURIComponent(JSON.stringify(data))}`);
//         }

//         if (data[0].attending !== null) {
//           router.push(`/rsvp/confirmation?meal=${encodeURIComponent(JSON.stringify(data))}`);
//         }


//       } else {
//         setResponseMessage('Name not found. Please try a different name or check the spelling.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setResponseMessage('Name not found. Please try a different name or check the spelling.');
//     }
//   };


//   return (
//     <div className="bg-black w-full grid justify-items-center z-10">
//       <div className="md:max-w-screen-sm  w-full z-10 grid mt-28 p-6">
//         <div className="flex-row my-auto text-white overflow-hidden max-w-screen-md">
//           <h1 className="display exception mb-8">
//             Enter your name
//           </h1>
//           <div className="w-full md:w-[25em]">
//             <form id="step1" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="firstName"><p>First Name:</p></label>
//                 <input
//                   className='w-full name_input'
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="py-4">
//                 <label htmlFor="lastName"><p>Last Name:</p></label>
//                 <input
//                   className='w-full name_input'
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {responseMessage && <p className="text-red-400 ">{responseMessage}</p>}


//               <button className="text-center button mt-16 mb-8">Search</button>


//               <p> Having issues?
//                 <Link className="underline" href="mailto:xywbella@gmail.com?subject='Wedding RSVP issue'"> Contact us.</Link>
//               </p>
//             </form>

//           </div>

//         </div>
//       </div >
//       <div className="my-80"></div>
//     </div >
//   );
// }

// export default Rsvp;

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to an external website
    window.location.href = 'https://isabellandanielwed.rsvpify.com/';
  }, []);

  return <p>Redirecting...</p>;
}