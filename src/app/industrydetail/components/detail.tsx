"use client";

import React from "react";
import { Dna, UserRound, ShieldCheck, BarChart } from "lucide-react";
import { Industry, IndustrySolution, Feature } from "../../../types/industry";
import Link from "next/link";


interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl border-gray-300 border hover:bg-pink-50 transition-colors duration-300 hover:scale-[1.03] transform">
    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#792F6C] to-[#E2335F] mb-4 ">
      <Icon className="text-white w-6 h-6 hover:scale-[1.06]" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);


const iconMap = [Dna, UserRound, ShieldCheck, BarChart];

interface DetailSectionProps {
  industry: Industry;
}

const DetailSection: React.FC<DetailSectionProps> = ({ industry }) => {
  if (!industry) return null;

  return (
   <div className="min-h-screen flex flex-col items-center justify-center py-6 sm:py-12 px-4 sm:px-0">
  {/* Section Header */}
  <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-2 sm:px-0">
    <p className="inline-block bg-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-wide py-1 px-3 sm:py-1 sm:px-4 rounded-full">
      <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#792F6C] to-[#E2335F]">
        What We Do
      </span>
    </p>

    <h1 className="mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 sm:mt-8">
      Why Choose Onit Global for{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#792F6C] to-[#E2335F]">
        {industry.title}
      </span>{" "}
      IT Solutions
    </h1>

    <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-500">
      {industry.detailText}
    </p>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    {industry.features?.map((feature, index) => {
      const IconComponent = iconMap[index % iconMap.length];
      return (
        <div
          key={index}
          className="bg-white p-4 sm:p-8 rounded-xl border-gray-300 border hover:bg-pink-50 transition-colors duration-300 hover:scale-[1.03] transform"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#792F6C] to-[#E2335F] mb-3 sm:mb-4">
            <IconComponent className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:scale-[1.06]" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
        </div>
      );
    })}
  </div>

  {/* CTA Button */}
  <div className="text-center">
    <Link href="/contact">
  <button className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E2335F]/30 text-sm sm:text-base">
    {industry.ctaText}
  </button>
</Link>
  </div>
</div>

  );
};

export default DetailSection;
