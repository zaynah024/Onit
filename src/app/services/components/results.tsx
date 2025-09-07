"use client";
import React, { useRef } from "react";

// Props interface for the CaseStudyCard
interface CaseStudyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  caseStudyLink: string;
}

// Expanded client results data (6 cards)
const clientResults: CaseStudyCardProps[] = [
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
  {
    title: "Healthify",
    description:
      "A wellness tracking app that empowers users to set goals, monitor health data, and stay accountable on their fitness journey...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
  {
    title: "FinSmart",
    description:
      "A fintech dashboard enabling smarter investment tracking and providing real-time analytics for retail traders...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
  {
    title: "EcoRide",
    description:
      "A ride-sharing platform with a focus on eco-friendly vehicles, offering users a sustainable and convenient way to commute...",
    imageSrc: "/images/home/Bunafr.png",
    caseStudyLink: "#",
  },
];

// CaseStudyCard component
// CaseStudyCard component with hover interactions
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  imageSrc,
  caseStudyLink,
}) => (
  <div
    className="
      rounded-lg overflow-hidden border border-gray-200 bg-white
      flex-shrink-0
      w-[90vw] max-w-xs
      sm:w-[320px] sm:max-w-sm
      md:w-[360px] md:max-w-md
      lg:w-[400px] lg:max-w-lg
      xl:w-[420px] xl:max-w-xl
      transform transition-transform duration-300 ease-in-out
       hover:-translate-y-2
      cursor-pointer
    "
  >
    <div className="p-4 sm:p-6">
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
          xmlns="http://www.w3.org/2000/svg"
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


// Main App component
const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white py-8 -mb-45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="flex items-center justify-between mb-12">
          {/* Left text */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              Proven Client{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)" }}
              >
                Results
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              We help market leaders and innovators achieve their most ambitious goals.
            </p>
          </div>
          {/* Right side arrows */}
          <div className="flex space-x-4">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#E2335F] to-[#792F6C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <svg
                className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#E2335F] to-[#792F6C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <svg
                className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards - horizontal scroll */}
        <div className="mb-12">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {clientResults.map((result, index) => (
              <CaseStudyCard
                key={index}
                title={result.title}
                description={result.description}
                imageSrc={result.imageSrc}
                caseStudyLink={result.caseStudyLink}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center ">
          <a
            href="#"
            className="block rounded-md text-center text-white font-inter font-medium text-m flex items-center justify-center hover:scale-105 transform transition-transform duration-300 "
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
