"use client";

import React from "react";

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroText: string;
  detailText: string;
  image?: string;
  features?: string[];
}

interface Props {
  service: Service;
}

const ServiceDetailSection = ({ service }: Props) => {
  return (
<section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column - Text and Bullets */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gray-800">{service.title.split(" ")[0]} </span>
            <br />
            <span className="text-gray-500">
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {service.detailText}
          </p>

          {service.features && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700  hover:scale-[1.02] transition-all duration-300">
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 20 20"
                    fill="url(#gradient)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#7A2E6B" />
                        <stop offset="100%" stopColor="#E2335F" />
                      </linearGradient>
                    </defs>
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

       {/* Right Column - Image */}
<div className="relative mt-8 lg:mt-0 hidden lg:block">
  <img
    src={service.image || "/images/home/placeholder.png"}
    alt={service.title}
    className="rounded-xl shadow-lg"
  />
</div>

      </div>
    </section>
  );
};

export default ServiceDetailSection;
