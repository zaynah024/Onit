"use client";
import Link from "next/link";

import React from "react";
import { useInView } from "react-intersection-observer";

const ReadyToBuild = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full">
      <div
        ref={sectionRef}
        className={`relative w-full aspect-[5/2] md:aspect-[1440/346] overflow-hidden transition-all duration-1000 transform ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Background Image/Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-500"
          style={{
            backgroundImage: "url('/images/home/build.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center h-full p-6 md:p-16 text-white">
     {/* Left Content */}
<div className="w-full md:w-2/5 text-left flex flex-col items-start px-4 md:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight max-w-[18rem] md:max-w-full">
    Ready to build your next{" "}
    <span className="text-[#1C1D1F]">Dream Project?</span>
  </h2>
  <Link href="/contact">
    <button className="mt-4 md:mt-8 px-6 py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 bg-white text-sm md:text-base">
      <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
        Contact Us
      </span>
    </button>
  </Link>
</div>




        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
