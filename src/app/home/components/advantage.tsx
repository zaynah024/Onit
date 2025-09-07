"use client";

import React from "react";

const YourAdvantage = () => {
  return (
   <section className="bg-white py-2 mt-0 md:mt-0 -mt-30 px-4 md:px-12 lg:px-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto ">
    {/* Left Column - Text and Images */}
    <div className="flex flex-col order-1 lg:order-1 ">
      {/* Heading */}
      <div className="mb-12 max-w-xl text-center lg:text-left">
        <span className="inline-block px-4 py-1 text-sm font-semibold bg-gray-100 rounded-full">
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            How Choose Us?
          </span>
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
          Your{" "}
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            Advantage
          </span>{" "}
          with Onit Global
        </h2>
        <p className="mt-6 text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0 text-l -mb-9">
          We combine expertise, innovation, and a client-focused approach to
          deliver solutions that drive real results. Partnering with us means
          gaining a trusted technology team dedicated to your growth.
        </p>
      </div>

      {/* ✅ Window-Shaped Image Grid (Hidden on Mobile) */}
      <div className="hidden lg:grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
        <div className="aspect-square">
          <img
            src="/images/home/Base.png"
            alt="Working on a project"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        <div className="aspect-[4/3]">
          <img
            src="/images/home/2.png"
            alt="Two people working together"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        <div className="aspect-[4/3]">
          <img
            src="/images/home/3.png"
            alt="Person using a laptop"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        <div className="aspect-square">
          <img
            src="/images/home/4.png"
            alt="Person typing on a keyboard"
            className="rounded-lg shadow-lg w-full h-full object-cover -mt-13"
          />
        </div>
      </div>
    </div>

    {/* Right Column - Advantage Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-1 sm:mt-2 lg:mt-0 order-2 lg:order-2">
      {[
        {
          num: "01",
          title: "10+ Years of Experience",
          desc: "Over a decade of delivering innovative digital solutions to businesses worldwide.",
        },
        {
          num: "02",
          title: "3000+ Satisfied Clients",
          desc: "Trusted by thousands of businesses worldwide for reliable digital solutions.",
        },
        {
          num: "03",
          title: "6+ Creative & Tech Excellence Awards",
          desc: "Recognized for innovation and technical excellence in delivering outstanding digital solutions.",
        },
        {
          num: "04",
          title: "200+ Startups Trust Us",
          desc: "Helping startups worldwide turn ideas into scalable, high-performing digital solutions.",
        },
        {
          num: "05",
          title: "24/7 Support",
          desc: "Always available to assist you, ensuring your digital solutions run smoothly around the clock.",
        },
        {
          num: "06",
          title: "Transparent Pricing",
          desc: "Clear, upfront pricing with no hidden fees, so you always know what you're investing in.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-start max-w-sm p-4 bg-white transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white shadow-lg mb-4 rounded-[8px_8px_24px_8px] transition-all duration-500 hover:shadow-pink-400/50">
            <span className="text-2xl font-bold italic bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent transition-all duration-500 hover:animate-pulse">
              {card.num}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default YourAdvantage;
