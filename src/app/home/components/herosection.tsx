"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const staticText = "Crafting Digital Products That Drive ";
  const animatedWord = "Growth";
  const [displayWord, setDisplayWord] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplayWord(animatedWord.slice(0, i + 1));
        i++;
        if (i === animatedWord.length) {
          clearInterval(typingInterval);

          // Pause for 2 seconds, then restart typing
          pauseTimeout = setTimeout(() => {
            i = 0;
            setDisplayWord("");
            startTyping();
          }, 2000);
        }
      }, 100); // typing speed
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden px-6 pt-28 pb-10 text-center">
        <div className="flex flex-col items-center">
          <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            Innovate. Scale. Succeed
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-inter leading-tight tracking-wide mb-4">
            <span className="text-gray-900">{staticText}</span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #792F6C, #E2335F)",
              }}
            >
              {displayWord}
            </span>
            {displayWord !== animatedWord && <span className="animate-pulse">|</span>}
          </h1>

          <p className="text-base sm:text-lg max-w-xl mb-6 leading-snug text-gray-600">
            We design and develop software tailored to your business needs — 
            helping you scale faster, innovate smarter, and achieve lasting impact.
          </p>

          <a
            href="/contact"
            className="rounded-md transition-all shadow-md text-white font-inter font-bold text-lg flex items-center justify-center"
            style={{
              width: "201px",
              height: "56px",
              backgroundImage:
                "linear-gradient(to bottom right, #792F6C, #E2335F)",
            }}
          >
            Contact Us
          </a>
        </div>

        <div className="mt-8">
          <Image
            src="/images/home/herosection.png"
            alt="Hero Section"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home/herosection.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-4xl px-6 lg:px-24">
          <span className="inline-block bg-white/10 text-gray-200 px-4 py-1.5 rounded-full text-m font-medium mb-3">
           Innovate. Scale. Succeed
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-inter leading-none tracking-wide mb-4 text-white">
            {staticText}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #792F6C, #E2335F)",
              }}
            >
              {displayWord}
            </span>
            {displayWord !== animatedWord && <span className="animate-pulse">|</span>}
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 leading-snug text-gray-200">
            We design and develop software tailored to your business needs — 
            helping you scale faster, innovate smarter, and achieve lasting impact.
          </p>

          <a
            href="/contact"
            className="rounded-md transition-all shadow-md text-white font-inter font-bold text-lg flex items-center justify-center hover:from-[#E2335F] hover:to-[#792F6C]
             hover:scale-105 hover:shadow-xl"
            style={{
              width: "201px",
              height: "56px",
              backgroundImage:
                "linear-gradient(to bottom right, #792F6C, #E2335F)",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
