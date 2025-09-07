"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Industry } from "../../../types/industry";

const DeviceIcon = ({ src }: { src: string }) => (
  <img src={src} alt="Industry Icon" className="w-8 h-8" />
);

const IndustriesSection = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [visibleCount, setVisibleCount] = useState(9); // show first 9 initially

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("/data/industries.json");
        if (!res.ok) throw new Error("Failed to fetch industries");
        const data: Industry[] = await res.json();
        setIndustries(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
        setIndustries([]);
      }
    };
    fetchIndustries();
  }, []);

  if (!industries.length) {
    return (
      <div className="bg-white py-16 px-4 font-sans text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500">No industries available at the moment.</p>
        </div>
      </div>
    );
  }

  const toggleView = () => {
    setVisibleCount((prev) => (prev === 9 ? Math.min(14, industries.length) : 9));
  };

  return (
    <div className="bg-white py-16 px-4 font-sans text-center ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
          {industries.slice(0, visibleCount).map((industry) => (
            <Link
              key={industry.id}
              href={`/industrydetail/${industry.slug}`} // dynamic page link
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200    hover:shadow-[0_10px_20px_rgba(236,72,153,0.3)] 
                 transition-shadow duration-300 flex flex-col sm:flex-row items-start text-left duration-300 flex flex-col sm:flex-row items-start text-left"
            >
              <div className="p-3 rounded-full bg-pink-100 mb-4 sm:mb-0 sm:mr-4 self-start">
                <DeviceIcon src={industry.icon} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle View More / Less */}
        {industries.length > 9 && (
          <button
            onClick={toggleView}
            className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-white font-semibold py-3 px-10 rounded-md shadow-lg hover:opacity-90 transition duration-300"
          >
            {visibleCount === 9 ? "View More" : "View Less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default IndustriesSection;
