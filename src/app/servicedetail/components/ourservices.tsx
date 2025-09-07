"use client";

import React from "react";
import { Brush, Code, ShoppingCart, Zap, Globe } from "lucide-react";

interface ServiceCardData {
  icon: string;
  title: string;
  description: string;
}

interface OurServicesIncludesProps {
  service: {
    serviceCards?: ServiceCardData[];
  };
}

// Map string from JSON to Lucide icon
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Brush,
  Code,
  ShoppingCart,
  Zap,
  Globe,
};

const GradientIcon: React.FC<{ Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = ({
  Icon,
}) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient
        id="iconGradient"
        x1="0"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A2E6B" />
        <stop offset="1" stopColor="#E2335F" />
      </linearGradient>
    </defs>
    <Icon stroke="url(#iconGradient)" strokeWidth={2} />
  </svg>
);

const ServiceCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}> = ({ icon, title, description, isLast }) => {
  const IconComponent = iconMap[icon];
  return (
    <div>
      <div className="flex items-start space-x-4 py-6 hover:scale-[1.02] transition w-full">
        <div className="flex-shrink-0 p-3 rounded-full bg-gray-100 hover:scale-[1.05] transition">
          {IconComponent && <GradientIcon Icon={IconComponent} />}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 font-inter">{title}</h3>
          <p className="mt-1 text-gray-600 text-m">{description}</p>
        </div>
      </div>
      {!isLast && <div className="border-b border-gray-200" />}
    </div>
  );
};

const OurServicesIncludes: React.FC<OurServicesIncludesProps> = ({ service }) => {
  const cards = service.serviceCards || [];

  return (
<div className="pt-0 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-start">
        {/* Left Column */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 text-left">
          <span className="text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A2E6B] to-[#E2335F]">
              Service Features
            </span>
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Our Service <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A2E6B] to-[#E2335F]">
              Includes
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            We build websites and apps that are fast, responsive, and
            user-friendly, tailored to your business needs. Every project
            combines modern technology and design to deliver seamless digital
            experiences.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 grid gap-6 ">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              {...card}
              isLast={index === cards.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesIncludes;
