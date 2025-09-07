"use client";

import React from "react";
import { ChevronRight, Linkedin, Facebook, Globe, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const links = [
    {
      title: "Services",
      items: [
        "Mobile Applications",
        "Web Development",
        "Cyber Security",
        "E-Commerce",
        "Hosting",
        "SEO",
      ],
    },
    {
      items: [
        "UI/UX Design",
        "Graphic Design",
        "ERP Systems",
        "POS",
        "IOT",
        "Custom Software",
      ],
    },
    {
      title: "Industries",
      items: [
        "HealthCare",
        "Finance",
        "Education",
        "Retail",
        "Real Estate",
        "Travel",
      ],
    },
    {
      title: "Useful Links",
      items: ["Portfolio", "About", "Contact Us", "Blogs"],
    },
  ];

  return (
    <footer className="bg-[#1C1D1F] text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center space-y-4 mb-8 lg:mb-0 text-center">
            <Image
              src="/images/home/logo.svg"
              alt="Onit Global Logo"
              width={150}
              height={50}
              className="object-contain"
            />

            {/* Contact Info */}
            <div className="text-gray-400 text-sm space-y-2">
              <p className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 (328) 80-150-00</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@onitsol.com</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-2 justify-center">
              <a
                href="https://www.linkedin.com/onitsol"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/onitsol"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.onitsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {links.map((section, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 items-center text-center md:items-start md:text-left"
            >
              {section.title && (
                <h3 className="text-white text-lg font-semibold">{section.title}</h3>
              )}
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 justify-center md:justify-start"
                    >
                      <span>{item}</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#232529]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Onit Global
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
