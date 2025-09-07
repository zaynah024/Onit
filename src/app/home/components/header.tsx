"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Industry {
  id: number;
  icon: string;
  title: string;
  slug: string;
  description: string;
}

const Header = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
    fetch("/data/industries.json")
      .then((res) => res.json())
      .then((data) => setIndustries(data));
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Industries", href: "/industries", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white backdrop-blur-sm shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img
              src="/images/home/logo.png"
              alt="ONIT GLOBAL"
              width={119}
              height={50}
              className="h-[50px] w-[119px] object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex space-x-8 font-inter text-m relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isDropdownOpen = openDropdown === item.name;

              return (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setOpenDropdown(null)
                  }
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 font-medium transition-colors"
                  >
                    <span
                      className={
                        isActive
                          ? "bg-clip-text text-transparent"
                          : "text-[#374151] hover:text-[#792F6C] transition-colors"
                      }
                      style={
                        isActive
                          ? {
                              backgroundImage:
                                "linear-gradient(to bottom right, #792F6C, #E2335F)",
                            }
                          : {}
                      }
                    >
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isActive ? "#792F6C" : "#374151"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down transition-colors"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </a>

                  {/* Services Dropdown */}
                  {item.name === "Services" && isDropdownOpen && (
                    <div
                      className="absolute left-0 top-full mt-0 bg-white shadow-xl rounded-xl p-8 grid grid-cols-3 gap-4 z-50 w-[887px] h-[362px]"
                      onMouseEnter={() => setOpenDropdown("Services")}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="col-span-3 mb-4">
                        <h3 className="text-sm font-semibold text-gray-400">
                          OUR SERVICES
                        </h3>
                      </div>
                      {services.map((service) => (
                        <a
                          key={service.id}
                          href={`/servicedetail/${service.id}`}
                          className="flex items-start space-x-3 hover:bg-gray-50 rounded-lg p-3 -mt-5 transition"
                        >
                          <div className="w-6 h-6">
                            <img
                              src={service.icon}
                              alt={service.title}
                              className="w-6 h-6"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Industries Dropdown */}
                  {item.name === "Industries" && isDropdownOpen && (
                    <div
                      className="absolute left-0 top-full mt-0 bg-white shadow-xl rounded-xl p-8 grid grid-cols-3 gap-4 z-50 w-[887px] h-[400px]"
                      onMouseEnter={() => setOpenDropdown("Industries")}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="col-span-3 mb-4">
                        <h3 className="text-sm font-semibold text-gray-400">
                          INDUSTRIES WE SERVE
                        </h3>
                      </div>
                      {industries.map((industry) => (
                        <a
                          key={industry.id}
                          href={`/industrydetail/${industry.id}`}
                          className="flex items-start space-x-3 hover:bg-gray-50 rounded-lg p-3 -mt-5 transition"
                        >
                          <div className="w-6 h-6">
                            <img
                              src={industry.icon}
                              alt={industry.title}
                              className="w-6 h-6"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {industry.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {industry.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Contact Us Button */}
        <div className="hidden lg:flex ml-6">
          <a
            href="/contact"
            className="px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#792F6C] to-[#E2335F] hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="flex flex-col">
                <button
                  onClick={() =>
                    item.hasDropdown
                      ? setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      : null
                  }
                  className="flex justify-between items-center text-gray-700 font-medium"
                >
                  <a href={item.href}>{item.name}</a>
                  {item.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </button>

                {/* Mobile Services Dropdown */}
                {item.name === "Services" && openDropdown === "Services" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={`/servicedetail/${service.id}`}
                        className="block p-2 rounded hover:bg-gray-50 text-gray-700 font-medium"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}

                {/* Mobile Industries Dropdown */}
                {item.name === "Industries" && openDropdown === "Industries" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {industries.map((industry) => (
                      <a
                        key={industry.id}
                        href={`/industrydetail/${industry.id}`}
                        className="block p-2 rounded hover:bg-gray-50 text-gray-700 font-medium"
                      >
                        {industry.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

         
        </div>
      )}
    </header>
  );
};

export default Header;
