"use client";

interface Blog {
  title: string;
  heroText: string;
  date?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
}

const BlogHero = ({ blog }: { blog: Blog }) => {
  if (!blog) return null;

  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] via-[#FFFFFF] to-[#DBEAFE80] pt-35 pb-8 md:pt-50 md:pb-24">
      <div className="px-8 lg:px-16">
        {/* Breadcrumb */}
<div className="mb-6">
  <span className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-xs sm:text-sm">
    Home / Blogs /{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A2E6B] to-[#E2335F] ml-1">
      {blog.title}
    </span>
  </span>
</div>


        {/* Heading and text */}
        <div className="text-left">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-2xl">
            {blog.heroText}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{blog.category}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
            {blog.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {blog.author}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
