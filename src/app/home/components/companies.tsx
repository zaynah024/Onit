"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fallbackLogos = [
  "/images/home/Logo-1.png",
  "/images/home/Logo-2.png",
  "/images/home/Logo-3.png",
  "/images/home/Logo-4.png",
  "/images/home/Logo-5.png",
];

const App = () => {
  const [logos, setLogos] = useState<string[]>(fallbackLogos);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch("/data/logos.json");
        if (!res.ok) throw new Error("Failed to fetch JSON");
        const data = await res.json();
        if (data?.logos?.length > 0) setLogos(data.logos);
      } catch (error) {
        console.error("Error loading logos.json, using fallback:", error);
        setLogos(fallbackLogos);
      }
    };
    fetchLogos();
  }, []);

  // Infinite auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Duplicate the logos for seamless scrolling
    container.scrollLeft = 0;
    const scrollStep = 1; // pixels per frame
    const interval = 20; // ms

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += scrollStep;

      // Reset scroll to start once it reaches the duplicate logos
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const scrollInterval = setInterval(scroll, interval);
    return () => clearInterval(scrollInterval);
  }, [logos]);

  // Duplicate logos for infinite effect
  const infiniteLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${poppins.className} text-center text-lg leading-8 font-semibold text-gray-800 tracking-wide uppercase`}
        >
          Trusted by the greatest companies
        </h2>

        <div className="mt-8">
          {/* Mobile Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden md:hidden"
          >
            {infiniteLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <img
                  className="w-[109px] h-[36px] object-contain"
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/109x36/E5E7EB/4B5563?text=Logo+Error";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-5">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <img
                  className="w-[109px] h-[36px] object-contain"
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/109x36/E5E7EB/4B5563?text=Logo+Error";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
