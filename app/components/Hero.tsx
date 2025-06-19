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
          src={heroImages[0]}
          alt="hero 1"
          width={595}
          height={300}
          className="object-contain"
          unoptimized
        />
        <Image
          src={heroImages[1]}
          alt="hero 2"
          width={595}
          height={300}
          className="object-contain"
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
          src={heroImages[2]}
          alt="hero 3"
          width={400}
          height={250}
          className="object-contain"
          unoptimized
        />
        <Image
          src={heroImages[3]}
          alt="hero 4"
          width={400}
          height={250}
          className="object-contain"
          unoptimized
        />

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <Image
              src={heroImages[4]}
              alt="hero 5"
              width={185}
              height={120}
              className="object-contain"
              unoptimized
            />
            <Image
              src={heroImages[5]}
              alt="hero 6"
              width={185}
              height={120}
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={heroImages[6]}
              alt="hero 7"
              width={185}
              height={120}
              className="object-contain"
              unoptimized
            />
            <Image
              src={heroImages[7]}
              alt="hero 8"
              width={185}
              height={120}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
