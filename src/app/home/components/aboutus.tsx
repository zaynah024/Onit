"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024); // lg breakpoint
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
  className="relative flex items-center justify-center p-4 font-sans bg-cover bg-center
             pt-8 pb-8 lg:pt-20 lg:pb-20 min-h-[auto] lg:min-h-screen"
  style={{ backgroundImage: "url('/images/home/aboutback.png')" }}
>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10"
      >
        {/* Left Image Section */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full lg:w-1/2"
          >
            <img
              src="/images/home/Aboutimage.png"
              alt="Two developers building digital solutions"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        )}

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-sm font-semibold bg-[linear-gradient(to_bottom_right,#792F6C,#E2335F)] px-3 py-1 rounded-full w-fit mb-4 text-white"
          >
            About Us
          </motion.span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-800">
            Building Digital Solutions with Purpose
          </h1>

          <p className="mb-8 leading-relaxed text-gray-600">
            Eagle Soft is a Pakistan-based digital solutions company helping
            businesses worldwide grow with custom software, mobile apps, ERP
            systems, and web platforms. With 10+ years of expertise, we deliver
            simple, effective, and innovative products — built on trust and
            long-term partnerships.
          </p>

          <ul className="space-y-3">
            {[
              "Custom Software Development",
              "Mobile App Development",
              "ERP & Business Solutions",
              "Web Design & Development",
              "E-Commerce Platforms",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="font-bold mr-2 text-xl text-gray-800">
                  &bull;
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
