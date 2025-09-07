"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function TeamSection() {
  const members = [
    { name: "Zane Sorell", title: "CEO", imageUrl: "/images/home/user.jpg" },
    { name: "Maya Mathy", title: "Founder", imageUrl: "/images/home/user.jpg" },
    { name: "Alexis Jensen", title: "CTO", imageUrl: "/images/home/user.jpg" },
    { name: "Keira Battye", title: "Product Designer", imageUrl: "/images/home/user.jpg" },
    { name: "Dominic Game", title: "3D Artist", imageUrl: "/images/home/user.jpg" },
    { name: "James Vial", title: "Head of Front-End", imageUrl: "/images/home/user.jpg" },
  ];

  return (
    <div className="bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans -mt-10 sm:-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
        {/* Left side text */}
        <div className="flex flex-col items-start px-4 sm:px-6">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 uppercase tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-pink-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </span>

          <h1 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Team
            </span>{" "}
            <br /> Members.
          </h1>
          <p className="mt-3 sm:mt-6 max-w-xl text-s text-gray-500">
            Our talented team of designers, developers, and digital experts work
            together to create innovative solutions that drive business growth.
          </p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-4 mt-4 sm:mt-0">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">{member.title}</p>
              <div className="flex space-x-2 mt-1 sm:mt-2">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
