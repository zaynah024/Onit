"use client";
import React from "react";
import { motion } from "framer-motion";

// Step data interface
interface WorkProcessStep {
  title: string;
  description: string;
  number: string;
}

// Card props interface
interface WorkProcessCardProps {
  title: string;
  description: string;
  number: string;
  index: number;
}

// Work process data
const workProcessSteps: WorkProcessStep[] = [
  {
    title: "Discover & Plan",
    description:
      "We dive deep into understanding your business goals and challenges. Together, we define a clear roadmap for success.",
    number: "I",
  },
  {
    title: "Design & Prototype",
    description:
      "Our team creates intuitive designs and interactive prototypes. This ensures a seamless user experience before development begins.",
    number: "II",
  },
  {
    title: "Develop & Implement",
    description:
      "We build robust, scalable, and high-performing solutions tailored to your needs. Every line of code is crafted for efficiency and reliability.",
    number: "III",
  },
  {
    title: "Test & Launch",
    description:
      "We rigorously test every feature to ensure quality and performance. Once ready, we deploy your solution for a smooth, successful launch.",
    number: "IV",
  },
];

// Card component with animation
const WorkProcessCard: React.FC<WorkProcessCardProps> = ({ title, description, number, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      relative flex items-start bg-white 
      p-6 md:p-4  /* more padding on mobile, normal on desktop */
      rounded-xl border border-gray-300 
      mb-6 last:mb-0
      hover:scale-102 transition-transform
      w-11/12 md:w-full  /* slightly narrower on mobile, full width on desktop */
      min-h-[120px] md:min-h-[auto] /* taller on mobile, normal height on desktop */
      mx-auto  /* center on mobile */
    "
  >
    {/* Numbering with gradient */}
    <div className="
      absolute -left-4 top-10 
      w-10 h-10 bg-gradient-to-br from-[#792F6C] to-[#E2335F] 
      text-white rounded-lg flex items-center justify-center 
      text-sm md:text-base font-semibold 
      hover:scale-105 transition-transform hover:rotate-6
    ">
      {number}
    </div>

    <div className="flex-grow pt-4 pl-10 md:pl-8">
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 mt-0">
        {description}
      </p>
    </div>
  </motion.div>
);


// Main component
const WorkProcess: React.FC = () => {
  return (
    <div className="font-sans bg-white py-0 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side content */}
          <div className="md:pr-8">
            {/* Badge */}
            <div className="bg-gray-200 font-semibold px-4 py-1 rounded-full inline-block text-sm mb-4">
              <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-transparent bg-clip-text">
                How We Work
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Our{" "}
              <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] text-transparent bg-clip-text">
                Work
              </span>
              <br />
              Process
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600">
              We combine strategy, technology, and creativity to deliver solutions that meet
              real business needs. Our collaborative approach ensures every project is
              efficient, effective, and built for long-term success.
            </p>
          </div>

          {/* Right side cards with staggered animation */}
          <div className="mt-8 md:mt-0">
            {workProcessSteps.map((step, index) => (
              <WorkProcessCard
                key={index}
                title={step.title}
                description={step.description}
                number={step.number}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
