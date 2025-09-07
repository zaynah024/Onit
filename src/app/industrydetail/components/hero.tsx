"use client";

import React from "react";

interface Industry {
  id: number;
  icon: string;
  title: string;
  slug: string;
  description: string;
  heroText?: string;
  detailText?: string;
}

interface IndustryDetailHeroProps {
  industry: Industry;
}

const IndustryDetailHero: React.FC<IndustryDetailHeroProps> = ({ industry }) => {
  if (!industry) return <p className="p-8">Industry not found.</p>;

  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] via-[#FFFFFF] to-[#DBEAFE80] pt-35 pb-2 md:pt-50 md:pb-24">
      <div className="px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="mb-6">
          <span className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
            Home / Industries /{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] ml-1">
              {industry.heroText || industry.title}
            </span>
          </span>
        </div>

        {/* Heading and text */}
        <div className="text-left">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            {industry.heroText || industry.title}
          </h3>

          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl">
            {industry.detailText || industry.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetailHero;
