"use client";
import React from 'react';

const TechStackSection = () => {
  return (
   <div className="bg-[#FEFBFB] pt-8 lg:pt-0 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
    {/* Left content */}
    <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
      <span className="text-sm font-semibold bg-gray-200 px-3 py-1 rounded-full w-fit mb-4 inline-block">
        <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
          Our Tech Stack
        </span>
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Our <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">Tools</span> that Power <br />
        Our Solutions
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-lg">
        We leverage the latest technologies and tools to build robust, scalable,
        and high-performing digital solutions. Our tech stack combines modern
        frameworks, cloud platforms, and development tools to deliver products
        that are efficient, secure, and future-ready.
      </p>
    </div>
    
    {/* Right image/graphic */}
    <div className="lg:w-1/2 flex justify-center lg:justify-end">
      <img
        src="/images/home/spirals.png"
        alt="Tech Stack Graphic"
        className="h-full max-w-md lg:translate-x-8"
      />
    </div>
  </div>
</div>

  );
};

export default TechStackSection;
