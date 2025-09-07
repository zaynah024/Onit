"use client";

import React, { useEffect, useState } from "react";
import {
  SlidersHorizontal,
  TabletSmartphone,
  Globe,
  ShoppingCart,
} from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  caseStudyLink: string;
  category?: string; // optional in JSON
}

// Fallback data
const fallbackData: CaseStudyCardProps[] = [
  { title: "Bunafr", description: "Bunafr is a smart home coffee roaster that enables greater supply chain efficiencies and the possibility to create an equitable society. We...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/bunafr", category: "Web Development" },
  { title: "Divinity Metals", description: "An elegant e-commerce platform for Divinity Metals, offering a seamless shopping experience for their gold collection and various jewelry...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/divinity-metals", category: "E-commerce" },
  { title: "Locker Room", description: "Locker Room is an app used by college athletes and fans to exchange video messages asking for shoutouts, coaching advice, or general...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/locker-room", category: "Mobile Apps" },
  { title: "NovaTech", description: "NovaTech helps enterprises transition to cloud-native infrastructure with secure, scalable solutions tailored for their needs...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/novatech", category: "Web Development" },
  { title: "GreenCart", description: "A sustainable e-commerce platform focused on eco-friendly products, empowering consumers to shop responsibly...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/greencart", category: "E-commerce" },
  { title: "FinTrust", description: "FinTrust delivers AI-driven financial advisory tools, helping individuals and businesses make smarter investment decisions...", imageSrc: "/images/home/Bunafr.png", caseStudyLink: "/case-studies/fintrust", category: "Web Development" },
];

const ProjectsFilter = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) => {
  const filters = [
    { name: "All Projects", icon: <SlidersHorizontal size={20} />, label: "All Projects" },
    { name: "Mobile Apps", icon: <TabletSmartphone size={20} />, label: "Mobile Apps" },
    { name: "Web Development", icon: <Globe size={20} />, label: "Web Development" },
    { name: "E-commerce", icon: <ShoppingCart size={20} />, label: "E-commerce" },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-6 overflow-x-auto">
      <div className="flex space-x-2 sm:space-x-4 flex-nowrap">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`
              flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300
              ${
                activeFilter === filter.name
                  ? "text-white shadow-lg"
                  : "bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100"
              }
            `}
            style={
              activeFilter === filter.name
                ? { backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)" }
                : {}
            }
          >
            <span>{filter.icon}</span>
            <span>{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, imageSrc, caseStudyLink }) => (
  <div className="rounded-lg overflow-hidden border border-gray-200 bg-white hover:scale-105 transform transition-transform duration-300 shadow-sm hover:shadow-lg">
    <div className="p-3 sm:p-4">
      <img
        src={imageSrc}
        alt={`Screenshot of ${title}`}
        className="w-full h-36 sm:h-48 rounded-t-lg mb-3 sm:mb-4 object-cover"
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{description}</p>
      {/* <a
        href={caseStudyLink}
        className="font-semibold flex items-center text-sm sm:text-base bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(to right, #E2335F, #792F6C)" }}
      >
        Read Case Study
        <svg
          className="ml-2 w-3 h-3 sm:w-4 sm:h-4 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a> */}
    </div>
  </div>
);

const CaseStudyCards: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [caseStudies, setCaseStudies] = useState<CaseStudyCardProps[]>(fallbackData);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const res = await fetch("/data/results.json"); // replace with your JSON file or API endpoint
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCaseStudies(data);
      } catch (error) {
        console.error("Using fallback data due to fetch error:", error);
        setCaseStudies(fallbackData);
      }
    }

    fetchCaseStudies();
  }, []);

  const filteredResults =
    activeFilter === "All Projects"
      ? caseStudies
      : caseStudies.filter((card) => card.category === activeFilter);

  return (
    <div className="font-sans min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className="w-full border-b border-gray-200 mb-12"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {filteredResults.map((result, index) => (
            <CaseStudyCard
              key={index}
              title={result.title}
              description={result.description}
              imageSrc={result.imageSrc}
              caseStudyLink={result.caseStudyLink}
              category={result.category}
            />
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-white font-semibold py-3 px-10 sm:px-14 rounded-md shadow-lg hover:opacity-90 transition duration-300">
            View All
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudyCards;
