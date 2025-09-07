"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// ✅ Fallback data with IDs
const fallbackServices = [
  { id: 1, title: "Mobile Applications", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s1.png" },
  { id: 2, title: "Web Development", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s2.png" },
  { id: 3, title: "Cyber-Security", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s3.png" },
  { id: 4, title: "E-Commerce", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s4.png" },
  { id: 5, title: "Hosting", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s5.png" },
  { id: 6, title: "SEO", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s6.png" },
  { id: 7, title: "UI/UX Design", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s7.png" },
  { id: 8, title: "Graphic Design", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s8.png" },
  { id: 9, title: "ERP Systems", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s9.png" },
  { id: 10, title: "POS", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s10.png" },
  { id: 11, title: "IOT", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s11.png" },
  { id: 12, title: "Custom Software", description: "Security testing is a type of software testing that is focused determining if an information.", icon: "/images/home/s12.png" },
];

const ServicesSection = () => {
  const [services, setServices] = useState(fallbackServices);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        // ✅ keep id when merging
        const merged = fallbackServices.map((fallback, index) => ({
          id: data[index]?.id || fallback.id,
          title: data[index]?.title || fallback.title,
          description: data[index]?.cardDetailText || fallback.description,
          icon: data[index]?.icon || fallback.icon,
        }));
        setServices(merged);
      })
      .catch(() => setServices(fallbackServices));
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 px-4 font-sans text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold text-gray-600 bg-gray-200 px-3 py-1 rounded-full inline-block mb-4">
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Our Services
            </span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
            Explore Our Software <br />
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            We create digital solutions that help businesses grow. From software to apps and web platforms, our services deliver real impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => router.push(`/servicedetail/${service.id}`)}
              className="p-6 rounded-2xl border border-[#E3E3E3] bg-white text-left cursor-pointer transition duration-300 hover:bg-gradient-to-br hover:from-[#792F6C] hover:to-[#E2335F] hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-white border border-[#E3E3E3]">
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
