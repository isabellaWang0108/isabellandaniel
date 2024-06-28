"use client"; // Ensure this is at the top of the file

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
import { useEffect, useState } from 'react';


const ConfirmationPage = () => {
    const searchParams = useSearchParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const mealParam = searchParams.get('meal');
        if (mealParam) {
            setMeal(JSON.parse(decodeURIComponent(mealParam)));
        }
    }, [searchParams]);

    return (
        <div className="bg-black w-full grid justify-items-center z-10">
            <div className="md:max-w-screen-sm w-full z-10 grid mt-28 p-6">
                <div className="flex-row my-auto text-white overflow-hidden max-w-screen-md">
                    <h1 className="display exception mb-4">
                        We will see you at Bronx zoo.
                    </h1>
                    <p className="mb-2 mt-8">On that day,</p>
                    {meal.length > 0 ? (
                        <div>
                            {meal.map((result, index) => (
                                <div key={index}>
                                    <p className="mb-2">
                                        {result.name.split(' ')[0].charAt(0).toUpperCase() + result.name.split(' ')[0].slice(1)}
                                        {result.attending ? " will eat " + result.appetizer + " and " + result.entree + "." : " will not have that much fun."}
                                    </p>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No meal information found.</p>
                    )}

                    <p className="mt-8 mb-2"> If life throws you a surprise.</p>
                    <p className="mb-2">If it's really, really important and unexpected.</p>
                    <p className="mb-2"> <Link className="underline" href="mailto:xywbella@gmail.com?subject='Wedding RSVP issue'">Contact us</Link> to make changes. </p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;