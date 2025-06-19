"use client";
import React, { useState } from "react";
import Image from "next/image";

import firstHero from "../images/hero1.png";
import secondHero from "../images/hero2.png";
import thirdHero from "../images/hero3.png";
import fourthHero from "../images/hero4.png";
import fifthHero from "../images/hero5.png";
import sixthHero from "../images/hero6.png";
import seventhHero from "../images/hero7.png";
import eighthHero from "../images/hero8.png";

const heroImages = [
  firstHero,
  secondHero,
  thirdHero,
  fourthHero,
  fifthHero,
  sixthHero,
  seventhHero,
  eighthHero,
];

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6 mt-4 w-full">
      {/* Top Two Images */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <Image
          className="md:w-[595px] h-auto md:h-[300px] object-contain"
          src={heroImages[0]}
          alt="hero 1"
          unoptimized
        />
        <Image
          className="md:w-[595px] h-auto md:h-[300px] object-contain"
          src={heroImages[1]}
          alt="hero 2"
          unoptimized
        />
      </div>

      <div className="flex gap-2 mt-2">
        {[0, 1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            className={`border-2 rounded-md w-[25px] h-[10px] cursor-pointer ${
              activeIdx === idx
                ? "bg-[#0F70DC] border-[#0F70DC]"
                : "border-[#0F70DC]"
            }`}
            onClick={() => setActiveIdx(idx)}
          ></div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-full">
        <Image
          className="md:w-[400px] h-auto md:h-[250px] object-contain"
          src={heroImages[2]}
          alt="hero 3"
          unoptimized
        />
        <Image
          className="md:w-[400px] h-auto md:h-[250px] object-contain"
          src={heroImages[3]}
          alt="hero 4"
          unoptimized
        />

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <Image
              className="w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain"
              src={heroImages[4]}
              alt="hero 5"
              unoptimized
            />
            <Image
              className="w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain"
              src={heroImages[5]}
              alt="hero 6"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              className="w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain"
              src={heroImages[6]}
              alt="hero 7"
              unoptimized
            />
            <Image
              className="w-[48vw] md:w-[185px] h-auto md:h-[120px] object-contain"
              src={heroImages[7]}
              alt="hero 8"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
