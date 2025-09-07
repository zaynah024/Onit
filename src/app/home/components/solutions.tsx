"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Industry } from "../../../types/industry"; // import type from types

const IndustriesSection = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("/data/industries.json");
        if (!res.ok) throw new Error("Failed to fetch industries");
        const data: Industry[] = await res.json();
        setIndustries(data.slice(0, 6)); // show first 6
      } catch (error) {
        console.error("Error loading industries:", error);
        setIndustries([]); // fallback empty
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div className="bg-white py-16 px-4 font-sans text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full w-fit mx-auto mb-4 inline-block">
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            Solutions for Every <br />
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We provide tailored digital solutions for businesses across industries,
            turning challenges into growth opportunities.
          </p>
        </motion.div>

        {/* Industry Cards */}
<div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
  {industries.map((industry) => (
    <Link
      key={industry.id}
      href={`/industrydetail/${industry.id}`}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 
                 hover:shadow-[0_10px_20px_rgba(236,72,153,0.3)] 
                 transition-shadow duration-300 flex flex-col sm:flex-row items-start text-left"
    >
      <div className="p-3 rounded-full bg-pink-100 mb-4 sm:mb-0 sm:mr-4 self-start">
        <img src={industry.icon} alt={industry.title} className="w-6 h-6" />
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


        {/* View All Button */}
        <Link
          href="/industries"
          className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-white font-semibold py-3 px-10 rounded-md shadow-lg hover:opacity-90 transition duration-300 inline-block"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default IndustriesSection;
