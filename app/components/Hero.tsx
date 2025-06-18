'use client'
import React, { useState } from 'react';

import firstHero from '../images/hero1.png';
import secondHero from '../images/hero2.png';
import thirdHero from '../images/hero3.png';
import fourthHero from '../images/hero4.png';
import fifthHero from '../images/hero5.png';
import sixthHero from '../images/hero6.png';
import seventhHero from '../images/hero7.png';
import eighthHero from '../images/hero8.png';

const heroImages = [firstHero, secondHero, thirdHero, fourthHero, fifthHero, sixthHero, seventhHero, eighthHero];

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className='flex flex-col items-center gap-6 mt-4 w-full'>
      {/* Top Two Images */}
      <div className='flex flex-wrap justify-center gap-4 w-full'>
        <img
          className='w-full md:w-[595px] h-auto md:h-[300px] object-contain'
          src={heroImages[0].src}
          alt="hero 1"
        />
        <img
          className='w-full md:w-[595px] h-auto md:h-[300px] object-contain'
          src={heroImages[1].src}
          alt="hero 2"
        />
      </div>

      {/* Pagination Dots */}
      <div className='flex gap-2 mt-2'>
        {[0, 1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            className={`border-2 rounded-md w-[25px] h-[10px] cursor-pointer ${
              activeIdx === idx ? 'bg-[#0F70DC] border-[#0F70DC]' : 'border-[#0F70DC]'
            }`}
            onClick={() => setActiveIdx(idx)}
          ></div>
        ))}
      </div>

      {/* Lower Image Section */}
      <div className='flex flex-wrap justify-center gap-4 w-full'>
        <img
          className='w-full md:w-[400px] h-auto md:h-[250px] object-contain'
          src={heroImages[2].src}
          alt="hero 3"
        />
        <img
          className='w-full md:w-[400px] h-auto md:h-[250px] object-contain'
          src={heroImages[3].src}
          alt="hero 4"
        />

        {/* Grid of 4 Smaller Images */}
        <div className='flex flex-wrap gap-4'>
          <div className='flex flex-col gap-2'>
            <img
              className='w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain'
              src={heroImages[4].src}
              alt="hero 5"
            />
            <img
              className='w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain'
              src={heroImages[5].src}
              alt="hero 6"
            />
          </div>
          <div className='flex flex-col gap-2'>
            <img
              className='w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain'
              src={heroImages[6].src}
              alt="hero 7"
            />
            <img
              className='w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain'
              src={heroImages[7].src}
              alt="hero 8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
