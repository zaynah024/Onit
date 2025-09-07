"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { IndustrySolution } from "../../../types/industry";

interface SolutionSectionProps {
  industry: IndustrySolution;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ industry }) => {
  return (
    <div className="py-12 mb-8">

      {/* Heading Section */}
<div className="text-center mb-12 max-w-5xl mx-auto px-4 sm:px-0">
        <p className="inline-block bg-gray-200 text-sm font-semibold uppercase tracking-wide py-1 px-4 rounded-full">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#792F6C] to-[#E2335F]">
            Our Solutions
          </span>
        </p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Software Applications and Solutions for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#792F6C] to-[#E2335F]">
            {industry.title}
          </span>{" "}
          Industry
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          See what services and solutions we provide to our clients
        </p>
      </div>

      {/* Content Section: Image + Solutions */}
<div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-8 max-w-6xl mx-auto px-6 sm:px-10 mt-2 lg:mt-0 mb-20 lg:mb-0">
        <img
          src={industry.image}
          alt={`${industry.title} industry`}
          className="rounded-xl shadow-lg h-[300px] lg:h-[400px] object-cover"
        />

        <ul className="space-y-3">
          {industry.solutions.map((solution, index) => (
            <li key={index} className="flex items-center text-lg hover:scale-105 transition-transform">
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0 mr-2"
                style={{ stroke: "url(#tickGradient)" }}
              />
              <span className="text-gray-700">{solution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gradient definition */}
      <svg width="0" height="0">
        <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#792F6C" />
          <stop offset="100%" stopColor="#E2335F" />
        </linearGradient>
      </svg>
    </div>
  );
};

export default SolutionSection;
