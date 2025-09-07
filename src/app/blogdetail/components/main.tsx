"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface Blog {
  id: string;
  title: string;
  description?: string;
  heroText?: string;
  date?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
  content?: string[];
  related?: string[];
}

interface MainSectionProps {
  article: Blog;
  relatedArticles: Blog[];
}

export default function MainSection({ article, relatedArticles }: MainSectionProps) {
  if (!article) return null;

  return (
    <div className="relative min-h-screen bg-white">
      

      <div className="w-[90%] sm:w-[80%] mx-auto py-12 sm:py-20">

        {/* Main Image */}
        {article.imageUrl && (
          <div className="my-6">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={900}  
              height={450} 
              className="w-full rounded-lg object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          {article.content?.map((p, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg" // smaller on mobile
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>

        {/* Related News */}
        <div className="my-10">
          <h2 className="text-2xl mb-6">Related News</h2>

         {/* Mobile horizontal scroll */}
<div className="flex space-x-4 sm:hidden overflow-x-auto pb-10">
  {relatedArticles.map((it) => (
    <Link
      key={it.id}
      href={`/blogdetail/${it.id}`}
      className="flex-shrink-0 w-64 h-64 bg-white rounded-lg shadow transition transform cursor-pointer flex flex-col"
    >
      <div className="w-full h-2/3">
        <Image
          src={it.imageUrl || "/images/newsdetail/image.jpg"}
          alt={it.title}
          width={350}
          height={200}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2 flex-1 flex flex-col justify-between">
        <h3 className="text-sm font-semibold line-clamp-2">{it.title}</h3>
        <p className="text-xs text-gray-700 mt-1 line-clamp-2">{it.description}</p>
        <div className="mt-2 flex justify-end">
          <ArrowRight className="h-4 w-4 text-[#7A2E6B]" />
        </div>
      </div>
    </Link>
  ))}
</div>


          {/* Desktop grid */}
          <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.map((it) => (
              <div
                key={it.id}
                className="w-full flex flex-col transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-full mb-4 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={it.imageUrl || "/images/newsdetail/image.jpg"}
                    alt={it.title}
                    width={350}  
                    height={200} 
                    className="w-full h-40 object-cover rounded-lg transform transition-all duration-300 hover:brightness-110"
                  />
                </div>
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold line-clamp-2">{it.title}</h3>
                  <p className="text-gray-700 text-base flex-1">{it.description}</p>
                  <Link
                    href={`/blogdetail/${it.id}`}
                    className=" bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] text-white w-full flex items-center justify-between px-6 py-3 font-medium rounded"
                  >
                    Read More <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
