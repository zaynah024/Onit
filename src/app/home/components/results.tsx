"use client";
import React, { useEffect, useState } from "react";

// Props interface for the CaseStudyCard
interface CaseStudyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  caseStudyLink: string;
}

// ✅ Fallback data (used if fetch fails)
const fallbackClientResults: CaseStudyCardProps[] = [
  {
    title: "Bunafr",
    description:
      "Bunafr is a smart home coffee roaster that enables greater supply chain efficiencies and the possibility to create an equitable society. We...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
  {
    title: "Divinity Metals",
    description:
      "An elegant e-commerce platform for Divinity Metals, offering a seamless shopping experience for their gold collection and various jewelry...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
  {
    title: "Locker Room",
    description:
      "Locker Room is an app used by college athletes and fans to exchange video messages asking for shoutouts, coaching advice, or general...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
];

// ✅ CaseStudyCard component
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  imageSrc,
  caseStudyLink,
}) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 min-w-[240px] sm:min-w-0 hover:scale-105 transition-transform duration-300">
    <div className="p-4">
      <img
        src={imageSrc}
        alt={`Screenshot of ${title}`}
        className="w-full h-auto rounded-t-lg rounded-l-lg rounded-r-lg mb-4"
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      {/* <a
        href={caseStudyLink}
        className="font-semibold flex items-center bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)",
        }}
      >
        Read Case Study
        <svg
          className="ml-2 w-4 h-4 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </a> */}
    </div>
  </div>
);

// ✅ Main App component
const App: React.FC = () => {
  const [clientResults, setClientResults] = useState<CaseStudyCardProps[]>(fallbackClientResults);

  useEffect(() => {
    const fetchClientResults = async () => {
      try {
        const response = await fetch("/data/results.json");
        if (!response.ok) throw new Error("Failed to fetch");
        const data: CaseStudyCardProps[] = await response.json();
        setClientResults(data);
      } catch (error) {
        console.error("Error fetching client results:", error);
        setClientResults(fallbackClientResults);
      }
    };

    fetchClientResults();
  }, []);

  return (
    <div className="font-sans min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block font-medium px-4 py-1 rounded-full mb-4 bg-gray-200 bg-clip-text text-transparent border border-gray-300"
            style={{
              backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)",
            }}
          >
            Our Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            Proven Client{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)" }}
            >
              Results
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help market leaders and innovators achieve their most ambitious goals.
          </p>
        </div>

        {/* Case Studies */}
        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="md:hidden -mx-4 mb-12">
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {clientResults.slice(0, 3).map((result, index) => (
              <CaseStudyCard key={index} {...result} />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clientResults.slice(0, 3).map((result, index) => (
            <CaseStudyCard key={index} {...result} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="block rounded-md text-center text-white font-inter font-medium text-m flex items-center justify-center"
            style={{
              width: "201px",
              height: "48px",
              margin: "0 auto",
              backgroundImage: "linear-gradient(to bottom right, #E2335F, #792F6C)",
            }}
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
