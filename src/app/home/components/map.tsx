"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

// Flag icons from lucide-react (representing a few countries for demonstration)
import { Flag, Globe, MapPin } from "lucide-react";

// For demonstration, a placeholder for country data.
const countries = [
  {
    name: "Denmark",
    flag: (
      <img
        src="https://flagcdn.com/dk.svg"
        alt="Denmark flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
  {
    name: "Sweden",
    flag: (
      <img
        src="https://flagcdn.com/se.svg"
        alt="Sweden flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
  {
    name: "UK",
    flag: (
      <img
        src="https://flagcdn.com/gb.svg"
        alt="UK flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
  {
    name: "Turkey",
    flag: (
      <img
        src="https://flagcdn.com/tr.svg"
        alt="Turkey flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
  {
    name: "Canada",
    flag: (
      <img
        src="https://flagcdn.com/ca.svg"
        alt="Canada flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
  {
    name: "USA",
    flag: (
      <img
        src="https://flagcdn.com/us.svg"
        alt="USA flag"
        className="w-8 h-8 rounded-full shadow"
      />
    ),
  },
];

const GlobalPresence = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 -mt-16 px-4 md:py-24 md:px-8 text-center">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Gradient pill */}
        <div className="inline-block px-4 py-2 text-sm font-semibold bg-gray-200 rounded-full">
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            Our Global Presence
          </span>
        </div>

        {/* Heading with gradient "You" */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
          Wherever{" "}
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            You
          </span>{" "}
          Are, <br /> We Are There
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          With a presence in 15+ countries, we deliver reliable digital
          solutions to businesses around the world.
        </p>

        {/* Global map image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/home/global.png"
            alt="World map with a global presence"
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
