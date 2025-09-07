"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  id: string;
  date: string;
  category: string;
  title: string;
  imageUrl: string;
}

const InsightsSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data: Blog[]) => setBlogs(data.slice(0, 3))) // show top 3 insights
      .catch(() => setBlogs([]));
  }, []);

  if (blogs.length === 0) return null;

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
          Latest Insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Post (big image left) */}
          <div className="lg:col-span-2">
            <Link href={`/blogdetail/${blogs[0].id}`}>
              <img
                src={blogs[0].imageUrl}
                alt={blogs[0].title}
                className="w-full h-[500px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <div className="mt-4">
              <div className="flex items-center text-sm font-medium text-gray-500 mb-2">
                <span className="uppercase font-bold tracking-wide text-xs">
                  {blogs[0].category}
                </span>
                <span className="mx-2">•</span>
                <span>{blogs[0].date}</span>
              </div>
              <Link href={`/blogdetail/${blogs[0].id}`}>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer ">
                  {blogs[0].title}
                </h3>
              </Link>
            </div>
          </div>

          {/* Side Blog Posts */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:gap-8">
            {blogs.slice(1, 3).map((blog) => (
              <div
                key={blog.id}
                className="min-w-[250px] lg:min-w-full flex-shrink-0"
              >
                <Link href={`/blogdetail/${blog.id}`}>
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  />
                </Link>
                <div className="mt-2">
                  <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                    <span className="uppercase font-bold tracking-wide text-xs">
                      {blog.category}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{blog.date}</span>
                  </div>
                  <Link href={`/blogdetail/${blog.id}`}>
                    <h4 className="text-base font-bold text-gray-900 cursor-pointer">
                      {blog.title}
                    </h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12"></div>
      </div>
    </div>
  );
};

export default InsightsSection;
