"use client";
import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "+", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref}>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
        {count}
        {suffix}
      </h2>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-[#0F172A] text-white py-16 px-4 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <Counter end={10} suffix="+" />
          <p className="text-gray-400 text-lg">Years of Industry Experience</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <Counter end={3000} suffix="+" />
          <p className="text-gray-400 text-lg">Satisfied Clients Worldwide</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <Counter end={200} suffix="+" />
          <p className="text-gray-400 text-lg">Startups &amp; Enterprises Trust Us</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
