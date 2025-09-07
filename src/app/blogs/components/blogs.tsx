"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    category: "Our Blogs",
    date: "July 25, 2025",
    title: "Mylar Bags Packaging: Cost and Benefits",
    description:
      "Lorem ipsum dolor is a dummy text used to display how the text will look when placed here.",
    imageUrl: "/images/home/image1.png",
  },
  {
    id: "2",
    category: "Our Blogs",
    date: "July 24, 2025",
    title: "How to Find Custom Boxes Manufacturers for Newly Launched Brands in USA?",
    description:
      "Lorem ipsum dolor is a dummy text used to display how the text will look when placed here.",
    imageUrl: "/images/home/image1.png",
  },
  {
    id: "3",
    category: "Our Blogs",
    date: "July 23, 2025",
    title: "Benefits of Sustainable Packaging for Small Businesses",
    description:
      "Lorem ipsum dolor is a dummy text used to display how the text will look when placed here.",
    imageUrl: "/images/home/image1.png",
  },
];

export default function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [trendingPosts, setTrendingPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        if (data && data.length > 0) {
          setPosts(data);
          setTrendingPosts(data.slice(0, 3));
        } else {
          setPosts(fallbackPosts);
          setTrendingPosts(fallbackPosts.slice(0, 3));
        }
      })
      .catch(() => {
        setPosts(fallbackPosts);
        setTrendingPosts(fallbackPosts.slice(0, 3));
      });
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12">

        {/* Main Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          
          {/* Mobile horizontal scroll */}
          <div className="flex sm:hidden overflow-x-auto space-x-4 pb-4">
            {posts.map((post) => (
              <Link key={post.id} href={`/blogdetail/${post.id}`}>
                <div className="flex-shrink-0 w-64 h-64 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-2/3 object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-bold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex flex-col space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogdetail/${post.id}`}
                className="block"
              >
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 hover:bg-gray-50 rounded-lg transition hover:scale-102 transition-transform duration-300">
                  <div className="w-full sm:w-1/3 flex-shrink-0">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow "
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      <span className="uppercase text-gray-500 font-bold tracking-wide">
                        {post.category}
                      </span>
                      <span className="mx-1">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Line before pagination */}
          <div className="border-t border-gray-200 mt-8"></div>

          {/* Pagination */}
          <div className="flex justify-start pt-4 space-x-2">
            <button className="w-8 h-8 rounded-lg bg-gray-300 text-white flex items-center justify-center font-bold">
              1
            </button>
            <button className="w-8 h-8 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center justify-center font-bold">
              2
            </button>
            <button className="w-8 h-8 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center justify-center font-bold">
              3
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Trending Posts */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Trending posts
            </h4>
            <div className="space-y-4">
              {trendingPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogdetail/${post.id}`}
                  className="flex items-center space-x-4 pb-4 border-b border-gray-200 hover:bg-gray-50 rounded transition"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Follow us</h4>
            <div className="flex space-x-4 text-gray-600 text-2xl">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
