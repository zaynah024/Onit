"use client";

import { useState } from 'react';

export default function ItServices() {
  const stats = [
    { label: 'Project Completed', value: '130' },
    { label: 'Awesome clients', value: '3K+' },
    { label: 'Years of Experience', value: '10+' },
    { label: 'Awards Winning', value: '5' }
  ];

  return (
    <div className="bg-white py-16 -mb-16 px-6 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 uppercase tracking-wider">
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Discover the Advantage
            </span>
          </span>

          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            We are a IT service Company working with talents on{" "}
            <span className="bg-gradient-to-tr from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              delivering unique ideas
            </span>.
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-gray-500">
            Onit is a leading digital solutions company based in Pakistan, delivering innovative technology to businesses across the globe. With over a decade of experience, we specialize in custom software, mobile apps, ERP systems, and creative web solutions that help organizations grow and perform better.
          </p>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="w-full h-auto overflow-hidden shadow-lg">
              <img
                src="/images/home/aboutus.png"
                alt="A team working together"
                className="w-full h-auto bg-pink-50 object-cover"
              />
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mt-0 flex flex-col justify-between">
            <div className="text-gray-600">
              <p className="text-lg leading-relaxed">
                We combine creativity, strategy, and technology to craft solutions that
                solve real business challenges. Every project is handled collaboratively,
                ensuring efficiency, quality, and long-term partnerships.
                Our team of experts brings deep industry knowledge and a passion for
                innovation, allowing us to design solutions that are not only effective
                today but also adaptable for the future.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 -mt-20 hidden lg:grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    flex flex-col items-start p-6 bg-white 
                    shadow-[4px_4px_10px_rgba(0,0,0,0.1)]
                    transform transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                    cursor-pointer
                  "
                >
                  <span
                    className="text-9xl font-light bg-clip-text text-transparent transition-all duration-500"
                    style={{ backgroundImage: 'linear-gradient(to right, #E2335F, #792F6C)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xl text-gray-800">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
