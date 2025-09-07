import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-100 relative">
      {/* Top section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
      </div>

      {/* Main section */}
      <div className="bg-[#1C1D1F] pt-5 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Left side: Contact info */}
          <div className="flex flex-col justify-center text-white">
            <div className="text-m uppercase tracking-wide text-gray-400 font-semibold mb-2">
              <span className="text-gray-200 mr-1">
                *<span className="bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] bg-clip-text text-transparent">
                  DROP US A LINE
                </span>*
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Connect with Onit</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Ready to take the first step towards unlocking opportunities, realizing goals, and embracing innovation? We're here and eager to connect.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
                <div>
                  <div className="text-gray-400 text-sm">For More Inquiry</div>
                  <div className="text-white font-semibold"><span>+92 (328) 80-150-00</span></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <div className="text-gray-400 text-sm">To Send Mail</div>
                  <div className="text-white font-semibold">info@onitsol.com</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-gray-400 text-sm uppercase font-semibold mb-2">
                Social Just You Connected Us!
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaLinkedin size={24} />
                </a>
                
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="w-full relative lg:max-w-lg p-8 sm:p-12 rounded-xl shadow-lg lg:mt-[-6rem] bg-gradient-to-b from-[#F8F9FE] to-[#FBF4FA]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Success Starts Here!</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-s font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-1 bg-white block w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-s font-medium text-gray-900">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-1 bg-white block w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-s font-medium text-gray-900">
                    Phone *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 bg-white block w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-s font-medium text-gray-900">
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="mt-1 bg-white block w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-s font-medium text-gray-900">
                  Your Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 bg-white block w-full border border-gray-300 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-s font-medium text-gray-900">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block bg-white border border-gray-300 w-full rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-md text-white font-bold bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
