"use client";
import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const logos = [
  '/images/home/Logo-1.png',
  '/images/home/Logo-2.png',
  '/images/home/Logo-3.png',
  '/images/home/Logo-4.png',
  '/images/home/Logo-5.png',
];

const App = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 -mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight text-center">
          Our{' '}
          <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
            Clients
          </span>
        </h2>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden overflow-x-hidden mt-8 relative">
          <div className="flex space-x-6 animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[109px] h-[36px]">
                <img
                  className="w-full h-full object-contain"
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

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
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

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
