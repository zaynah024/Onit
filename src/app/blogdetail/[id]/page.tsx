"use client";

import Header from "../../home/components/header";
import BlogHero from "../components/hero";
import MainSection from "../components/main";
import BuildSection from "../../home/components/build";
import Footer from "../../home/components/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  heroText: string;
  date?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
  description?: string;
  related?: string[];
}

export default function BlogDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        const found = data.find((b) => b.id === id) || data[0];
        setBlog(found);
        // Find related blogs by IDs
        if (found?.related) {
          setRelatedBlogs(data.filter((b) => found.related?.includes(b.id) && b.id !== found.id));
        } else {
          setRelatedBlogs(data.filter((b) => b.id !== found.id).slice(0, 3));
        }
      });
  }, [id]);

  return (
    <div>
      <Header />
      <BlogHero blog={blog as Blog} />
      <MainSection article={blog as Blog} relatedArticles={relatedBlogs} />
      <BuildSection />
      <Footer />
    </div>
  );
}
