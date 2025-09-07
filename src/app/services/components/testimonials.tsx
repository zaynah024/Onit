"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={20}
      className={`fill-current ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
    />
  ));
  return <div className="flex">{stars}</div>;
};

interface TestimonialCardProps {
  text: string;
  name: string;
  avatar: string;
  rating: number;
}

const fallbackTestimonials: TestimonialCardProps[] = [
  {
    text: "Teamollo delivered the site within the timeline as they requested. The client found a 50% increase in traffic in days. Technologies used were easy and reliable.",
    name: "Ashley Cooper",
    avatar: "/images/home/user.jpg",
    rating: 5,
  },
  {
    text: "Teamollo delivered the site on time. The client noticed a significant increase in traffic and engagement. The team used technologies not used before by the company.",
    name: "Noah Jack",
    avatar: "https://placehold.co/100x100/F5A623/FFFFFF?text=NJ",
    rating: 4,
  },
  {
    text: "Teamollo exceeded expectations. The client experienced a notable boost in traffic and was impressed by the tech solutions.",
    name: "Gabriel Jackson",
    avatar: "https://placehold.co/100x100/A5E7A5/0D480D?text=GJ",
    rating: 5,
  },
  {
    text: "Teamollo delivered efficiently. The client found the solutions reliable and easy to use, with excellent results.",
    name: "Emily Smith",
    avatar: "https://placehold.co/100x100/FFD700/000000?text=ES",
    rating: 5,
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, avatar, rating }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full hover:translate-y-1 transition-transform duration-300">
    <p className="text-gray-700 text-xs sm:text-base mb-2 sm:mb-3 leading-snug sm:leading-relaxed line-clamp-5">{text}</p>
    <div className="flex items-center mt-auto">
      <img src={avatar} alt={name} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 hover:scale-105 " />
      <div>
        <p className="font-semibold text-gray-900 text-xs sm:text-m">{name}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialCardProps[]>(fallbackTestimonials);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/data/testimonials.json");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data: TestimonialCardProps[] = await res.json();
        if (data && data.length > 0) setTestimonials(data);
      } catch (error) {
        console.warn("Using fallback testimonials due to fetch error:", error);
      }
    }
    fetchTestimonials();
  }, []);

  return (
<div className="-sm:mt-50">
  <section className="pt-32 pb-12 px-4 sm:py-16 sm:px-6 lg:px-8" style={{ backgroundColor: "#C04F4705" }}>
      <div className="text-center mb-12">
        <span className="text-sm font-semibold bg-gray-200 px-4 py-1 rounded-full">
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            Testimonials
          </span>
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-800">
          Hear What Our <br />
          <span className="bg-gradient-to-r from-[#E2335F] to-[#792F6C] bg-clip-text text-transparent">
            Clients
          </span>{" "}
          Have to Say
        </h2>
        <p className="mt-2 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Read what our clients have to say about their experience with us.
        </p>
      </div>

      {/* Mobile scrollable */}
      <div className="sm:hidden overflow-x-auto">
        <div className="flex gap-4 min-w-max px-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-56 h-56 aspect-square">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid remains unchanged */}
      <div className="hidden sm:flex justify-center">
        <div className="grid grid-cols-2 gap-4 max-w-3xl ">
          {testimonials[0] && <div className="aspect-square"><TestimonialCard {...testimonials[0]} /></div>}
          {testimonials[1] && <div className="aspect-[4/3]"><TestimonialCard {...testimonials[1]} /></div>}
          {testimonials[2] && <div className="aspect-[4/3]"><TestimonialCard {...testimonials[2]} /></div>}
          {testimonials[3] && <div className="aspect-square -mt-24"><TestimonialCard {...testimonials[3]} /></div>}
        </div>
      </div>
    </section>
</div>
  );
};

export default TestimonialsSection;
