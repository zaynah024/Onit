"use client";

import React from "react";

interface Technology {
  src: string;
  name: string;
}

interface TechStackSectionProps {
  technologies?: Technology[];
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ technologies = [] }) => {
  if (!technologies.length) return null; // no tech → no render

  return (
<div className="pt-0 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <span
          className="text-m font-semibold px-6 py-2 rounded-full bg-gray-200 bg-opacity-50 
                         bg-clip-padding"
        >
          <span className="bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] bg-clip-text text-transparent">
            Our Tools
          </span>
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-gray-800">
          Our{" "}
          <span className="bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] bg-clip-text text-transparent">
            Technology
          </span>{" "}
          Stack
        </h2>
      </div>

      {/* Grid of technology icons */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 min-h-[80px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.05] transition-shadow duration-300"
          >
            <div className="flex items-center">
              <img
                src={tech.src}
                alt={tech.name}
                className="w-8 h-8 object-contain mr-4"
              />
              <p className="text-gray-800 font-medium text-lg">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
