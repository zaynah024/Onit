"use client";

import { useState, ReactNode } from "react";

interface AwardsSectionProps {
  topIcon?: ReactNode; // allow passing any external icon
}

export default function AwardsSection({ topIcon }: AwardsSectionProps) {
  const awards = [
    { year: "2024", title: "Innovation Ignition Award", description: "Site Of The Day" },
    { year: "2024", title: "CSS Design Award", description: "Site Of The Day" },
    { year: "2024", title: "Masterpiece Maker", description: "Awards Jury 2024" },
    { year: "2024", title: "Innovation Ignition Award", description: "Site Of The Day" },
  ];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-12">
        {/* Left side */}
        <div className="flex-1">
          <div className="px-6 lg:sticky lg:top-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 uppercase tracking-wider">
              <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
                OUR AWARD TIME
              </span>
            </span>

            <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight leading-tight sm:text-4xl">
              <span className="text-gray-900">Celebrating Eagle</span> <br />{" "}
              <span className="text-gray-900">
                Soft's <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">Award-Winning</span>
              </span>{" "}
              <br /> <span className="text-gray-900">Excellence.</span>
            </h1>
            <p className="mt-6 max-w-lg text-m text-gray-500">
              Eagale Soft has been recognized for creativity, innovation, and technical excellence
              with multiple industry awards. These accolades reflect our commitment to delivering
              high-quality digital solutions and driving meaningful results for our clients
              worldwide.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 mt-12 lg:mt-0 relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-2 top-0 h-full w-px bg-gray-200"></div>

          {/* External icon (or fallback star) */}
          <div className="hidden lg:block absolute left-2 top-0 -translate-x-1/2 -translate-y-1/2">
            {topIcon ? (
              topIcon
            ) : (
              <img
                src="/images/home/star.png"
                alt="Award Icon"
                className="h-6 w-6 object-contain"
              />
            )}
          </div>

          {/* Awards list */}
<div className="space-y-8 px-16 sm:px-0 lg:pl-8">
  {awards.map((award, index) => (
    <div
      key={index}
      className={`flex items-center py-6 transform transition-transform duration-300 ease-in-out 
        cursor-pointer ${index < awards.length - 1 ? "border-b border-gray-200" : ""} hover:scale-102 group `}
    >
      {/* Number circle */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 mr-4 lg:mr-0 lg:ml-4 order-first lg:order-last
        bg-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#E2335F] group-hover:to-[#792F6C]"
      >
        <span className="text-gray-500 font-semibold group-hover:text-white transition-colors duration-300">
          {index + 1}
        </span>
      </div>

      <div className="flex-grow">
        <p className="text-sm text-gray-500">{award.year}</p>
        <h3 className="mt-1 text-xl font-bold text-gray-900">{award.title}</h3>
        <p className="mt-1 text-md text-gray-600">{award.description}</p>
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
}
