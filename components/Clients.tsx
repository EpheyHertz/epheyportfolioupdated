'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from './ui/InfiniteCard';
import axios from "axios"
import { companies } from '@/data'; 
import Loader from './loader';

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

  // Fetch the reviews from the api routes
  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true); 
      setError('');
      try {
        const res = await axios.get("/api/reviews");
        setTestimonials(res.data); 
      } catch (err) {
        setError("Failed to load testimonials. Please try again."); 
        console.error("Error fetching testimonial data:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-20" id="testimonials">
    <h1 className="heading">
      Kind words from{" "}
      <span className="text-purple">Satisfied Clients</span>
    </h1>

    {loading ? (
      <Loader />
    ) : error ? (
      <p className="text-red-500">{error}</p>
    ) : testimonials.length === 0 ? (
      <p>No reviews available</p>
    ) : (
      <div className="flex flex-col items-center">
        <div className="h-[50] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

export default Clients;
