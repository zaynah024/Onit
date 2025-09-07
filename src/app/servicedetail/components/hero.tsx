"use client";

import React, { useEffect, useState } from "react";

// Types for better clarity (optional in JS)
interface Service {
  title: string;
  description: string;
  heroText: string;
  detailText: string;
  image?: string;
}

interface Service {
  slug: string;
  title: string;
  description: string;
  heroText: string;
  detailText: string;
  image?: string;
  features?: string[];
}

interface OurServicesProps {
  service: Service;
}

const OurServices = ({ service }: OurServicesProps) => {
  if (!service) return null;

  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] via-[#FFFFFF] to-[#DBEAFE80] pt-35 pb-2 md:pt-50 md:pb-24">
      <div className="px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="mb-6">
          <span className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
            Home / Services /{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] ml-1">
              {service.title}
            </span>
          </span>
        </div>

        {/* Heading and text */}
        <div className="text-left">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            {service.title}
          </h3>

          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl">
            {service.heroText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
