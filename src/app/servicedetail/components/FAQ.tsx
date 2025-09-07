"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id?: number; // make it optional to avoid runtime crashes
  question: string;
  answer: string;
}

interface FAQWithImageProps {
  faqs?: FAQ[];
}

const FAQWithImage: React.FC<FAQWithImageProps> = ({ faqs = [] }) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (id?: number) => {
    if (id !== undefined) {
      setOpen(open === id ? null : id);
    }
  };

  if (!faqs.length) {
    return null; // nothing to render if no FAQs
  }

  return (
<div className="bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-start gap-12">
      {/* Left Column - Image (STATIC) */}
      <div className="lg:w-1.5/5 flex justify-center">
        <img
          src="/images/home/service-details2.png"
          alt="Task management and teamwork"
          className="w-4/5 lg:w-full h-auto "
        />
      </div>

      {/* Right Column - Accordion */}
      <div className="lg:w-2/5">
        {faqs.map((faq, index) => {
          const id = faq.id ?? index + 1; // fallback if id missing
          return (
            <div
              key={id}
              className="border-b border-gray-200 py-6 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(id)}
            >
              <div className="flex justify-between items-center text-gray-900 transition-colors font-inter font-medium ">
                <span className="font-semibold text-lg">
                  {`${id.toString().padStart(2, "0")}. ${faq.question}`}
                </span>
                <span>{open === id ? <Minus size={22} /> : <Plus size={22} />}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === id ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-base mt-2">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQWithImage;
