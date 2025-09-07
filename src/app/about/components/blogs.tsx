"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: string;
  date: string;
  category: string;
  comments: number;
  title: string;
  imageUrl: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/blogs.json");
        if (!response.ok) throw new Error("Failed to fetch");
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans -mb-6 sm:-mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 uppercase tracking-wider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="url(#grad1)"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#792F6C", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#E2335F", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.458a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.382-2.458a1 1 0 00-1.176 0l-3.382 2.458c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.097 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
            <span className="bg-gradient-to-r from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              OUR BLOGS
            </span>
          </span>

          <h1 className="mt-2 sm:mt-4 text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            News &{" "}
            <span className="bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="mt-3 sm:mt-6 max-w-2xl text-lg text-gray-500">
            Stay updated with the latest trends, insights, and tips in
            technology, web development, and digital innovation. Our blogs share
            valuable knowledge to help businesses grow and stay ahead in the
            digital world.
          </p>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4 pb-2 sm:pb-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Link href={`/blogdetail/${post.id}`}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-36 object-cover cursor-pointer"
                    />
                  </Link>
                  <div className="absolute top-3 left-3 h-12 w-12 rounded-full bg-gray-700 opacity-90 flex flex-col items-center justify-center text-xs font-semibold text-white">
                    <span className="text-sm leading-none">
                      {post.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] leading-none mt-1">
                      {post.date.split(" ")[1]}
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center text-xs text-gray-500 font-medium space-x-2">
                    <span className="underline">{post.category}</span>
                    <span className="border-l border-gray-200 h-3"></span>
                    <span>Comment ({post.comments})</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blogdetail/${post.id}`}
                    className="mt-2 sm:mt-3 inline-flex items-center font-semibold text-xs underline bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent"
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <Link href={`/blogdetail/${post.id}`}>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </Link>
                <div className="absolute top-4 left-4 h-16 w-16 rounded-full bg-gray-700 opacity-90 flex flex-col items-center justify-center text-sm font-semibold text-white">
                  <span className="block text-xl leading-none">
                    {post.date.split(" ")[0]}
                  </span>
                  <span className="block text-xs leading-none mt-1">
                    {post.date.split(" ")[1]}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-sm text-gray-500 font-medium space-x-2">
                  <span className="underline">{post.category}</span>
                  <span className="border-l border-gray-200 h-4"></span>
                  <span>Comment ({post.comments})</span>
                </div>

                <h3 className="mt-2 sm:mt-3 text-lg font-bold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <Link
                  href={`/blogdetail/${post.id}`}
                  className="mt-3 sm:mt-4 inline-flex items-center font-semibold text-sm underline bg-gradient-to-br from-[#792F6C] to-[#E2335F] bg-clip-text text-transparent"
                >
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
