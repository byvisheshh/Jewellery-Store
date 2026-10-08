import React, { useState, useMemo } from "react";
import { BLOG_ARTICLES, BlogArticle } from "../data/blogs";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Search, ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

interface BlogListingPageProps {
  onSelectArticle: (article: BlogArticle) => void;
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Gold",
    "Diamonds",
    "Bridal",
    "Jewellery Care",
    "Buying Guides",
    "Trends",
    "Gifting",
  ];

  const featuredArticle = BLOG_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      if (selectedCategory !== "All" && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.keywords.some((k) => k.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F7040] font-semibold">
          The Jewellery Journal
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal">
          Chronicles of Gold & Brilliance
        </h1>
        <p className="text-xs sm:text-sm text-[#666057] leading-relaxed">
          In-depth guides, gemological advice, bridal curation principles, and timeless care rituals crafted by our senior assayers and master jewelers.
        </p>
      </div>

      {/* Hero Featured Article (Magazine Lead) */}
      {!searchQuery && selectedCategory === "All" && (
        <div
          onClick={() => onSelectArticle(featuredArticle)}
          className="group relative bg-white border border-[#E8E2D8] hover:border-[#AA8B56] overflow-hidden cursor-pointer transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-sm hover:shadow-md"
        >
          <div className="lg:col-span-7 aspect-[16/10] bg-[#FAF8F5] overflow-hidden">
            <ImageWithFallback
              src={featuredArticle.featuredImage}
              alt={featuredArticle.title}
              aspectRatio="aspect-[16/10]"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              {/* Clean unboxed metadata with separators */}
              <div className="flex items-center gap-2 text-xs text-[#8E877D] tracking-wider uppercase font-medium">
                <span className="text-[#8F7040] font-semibold">{featuredArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.readingTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] group-hover:text-[#8F7040] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#666057] leading-relaxed font-light">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
              <div className="text-xs text-[#45403A]">
                <strong className="block text-[#1E1B18] font-medium">{featuredArticle.author.name}</strong>
                <span className="text-[11px] text-[#8E877D]">{featuredArticle.author.role}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#AA8B56] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1E1B18] text-white"
                  : "bg-white text-[#45403A] border border-[#E8E2D8] hover:border-[#AA8B56]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#8E877D] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#E8E2D8] text-xs text-[#1E1B18] focus:outline-none focus:border-[#AA8B56]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#8E877D]">
          <span>
            Showing <strong className="text-[#1E1B18]">{filteredArticles.length}</strong> journal essays
          </span>
          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-[#8F7040] hover:underline"
            >
              View All Topics
            </button>
          )}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center bg-white border border-[#E8E2D8] p-8 space-y-3">
            <BookOpen className="w-8 h-8 text-[#AA8B56] mx-auto" />
            <h3 className="font-serif text-xl text-[#1E1B18]">No Journal Articles Found</h3>
            <p className="text-xs text-[#666057] max-w-sm mx-auto">
              We couldn't find any articles matching your search criteria. Try a different topic or keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#FAF8F5] overflow-hidden">
                    <ImageWithFallback
                      src={article.featuredImage}
                      alt={article.title}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-[11px] text-[#8E877D] tracking-wider uppercase">
                      <span className="text-[#8F7040] font-semibold">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="font-serif text-xl text-[#1E1B18] group-hover:text-[#8F7040] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#666057] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F4EFE6] flex items-center justify-between text-xs text-[#8E877D]">
                  <span>{article.author.name}</span>
                  <span className="inline-flex items-center gap-1 text-[#AA8B56] font-medium group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
