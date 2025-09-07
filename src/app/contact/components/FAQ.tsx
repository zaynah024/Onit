"use client";

import { useState } from 'react';

// A single file component that handles a responsive FAQ page with expandable answers.
export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Onit Global?',
      answer: 'Onit Global is a technology company dedicated to delivering innovative IT solutions, streamlining business processes, and helping organizations leverage the latest digital tools for growth and efficiency.'
    },
    {
      question: 'What services does Onit Global offer?',
      answer: 'Onit Global offers a wide range of IT services including software development, cloud solutions, enterprise automation, AI-driven analytics, and IT consulting tailored to your business needs.'
    },
    {
      question: 'How advanced is Onit Global’s technology?',
      answer: 'Onit Global leverages state-of-the-art technologies including AI, cloud computing, and automation tools to deliver high-quality solutions. Our systems are designed to optimize efficiency and provide actionable insights for your business.'
    },
    {
      question: 'Is Onit Global suitable for small and large businesses?',
      answer: 'Yes! Onit Global designs scalable IT solutions suitable for startups, SMEs, and large enterprises alike, ensuring technology grows alongside your business.'
    },
    {
      question: 'Can I see Onit Global’s solutions in action?',
      answer: 'Absolutely! We offer live demos and consultations to showcase our solutions and how they can benefit your organization. Reach out to our team to schedule a personalized session.'
    },
];


  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 uppercase tracking-wider">
            <span className="bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] bg-clip-text text-transparent">
              FAQ
            </span>
          </span>

          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            <span className="text-gray-900">Frequently Asked</span>{" "}
            <span className="bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We're happy to answer your questions
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="px-6 py-8 transition-colors duration-200  hover:scale-[1.02]">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-2xl text-gray-900 flex-grow">
                  {faq.question}
                </span>
                <span className="ml-6 text-3xl transform transition-transform duration-300">
                  {openIndex === index ? (
                    <span className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-16 h-16 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12" />
                      </svg>
                    </span>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 pr-12 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
