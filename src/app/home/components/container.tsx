"use client";
import Link from "next/link";

import React from "react";
import { useInView } from "react-intersection-observer";

const MissionContainer = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div
        ref={sectionRef}
        className={`relative max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl p-6 md:p-12 transition-all duration-1000 transform lg:bg-[url('/images/home/container.png')] bg-cover bg-center bg-no-repeat ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Top-left abstract shape */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left p-4 md:p-8">
            {/* Gradient text */}
            <span className="uppercase font-semibold text-sm tracking-wide bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
              Contact Us Now
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
              Our mission is to look after the best interests of your business.
            </h2>

            {/* Gradient pill button */}
           <Link href="/contact">
  <button className="mt-8 px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 border border-white bg-gradient-to-r from-[#E2335F] to-[#792F6C]">
    Book a Service
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionContainer;
