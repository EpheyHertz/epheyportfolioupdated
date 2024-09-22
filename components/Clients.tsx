'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from './ui/InfiniteCard';
import { companies } from '@/data'; // Assuming companies are still static

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch the testimonial data from the Django API when the component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("https://epheyhertzportfoliobackend.onrender.com/apis/testimonials/");
        const testimonialData = await res.json();
        setTestimonials(testimonialData); // Adjust this based on your response format
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words from {' '}
        <span className='text-purple'>Satisfied Clients</span>
      </h1>
      <div className='flex flex-col items-center'>
        <div className='h-[50] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden max-lg:mt-10'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='fast'
          />

          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-5" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Clients;
