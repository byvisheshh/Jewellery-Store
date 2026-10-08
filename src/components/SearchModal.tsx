import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "../data/products";
import { BLOG_ARTICLES, BlogArticle } from "../data/blogs";
import { Search, X, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectArticle: (article: BlogArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.metal.toLowerCase().includes(q) ||
        p.jewelleryType.toLowerCase().includes(q) ||
        p.occasion.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return BLOG_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.keywords.some((k) => k.toLowerCase().includes(q)) ||
        a.excerpt.toLowerCase().includes(q)
    ).slice(0, 4);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#FAF8F5] border border-[#AA8B56]/40 shadow-2xl overflow-hidden mt-8 sm:mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#E8E2D8] flex items-center px-4 py-4 bg-white">
          <Search className="w-5 h-5 text-[#AA8B56] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search gold necklaces, solitaire rings, bridal sets, care guides..."
            className="w-full px-3 py-1 bg-transparent text-[#1E1B18] placeholder-[#8E877D] text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#8E877D] hover:text-[#1E1B18] mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs uppercase tracking-wider text-[#45403A] hover:text-[#1E1B18] border-l border-[#E8E2D8] pl-3 cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestion Categories (when query is empty) */}
        {!query.trim() && (
          <div className="p-6 space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-[#8E877D] font-medium block">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "22K Gold Rani Haar",
                "Solitaire Rings",
                "Bridal Choker",
                "Men's Gold Kada",
                "Nakashi Bangles",
                "22K vs 18K Difference",
                "Diamond 4Cs Guide",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 text-xs bg-white border border-[#E8E2D8] text-[#45403A] hover:border-[#AA8B56] hover:text-[#1E1B18] transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query.trim() && (
          <div className="max-h-[65vh] overflow-y-auto p-6 space-y-6">
            {/* Products Found */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8F7040] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jewellery Creations ({filteredProducts.length})</span>
              </div>

              {filteredProducts.length === 0 ? (
                <p className="text-xs text-[#8E877D] italic">No matching jewellery items found.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2.5 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-colors cursor-pointer group"
                    >
                      <div className="w-14 h-14 shrink-0 bg-[#FAF8F5]">
                        <ImageWithFallback
                          src={prod.image}
                          alt={prod.name}
                          aspectRatio="aspect-square"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#8E877D] block">
                          {prod.metal} · {prod.grossWeight}
                        </span>
                        <h4 className="font-serif text-xs font-medium text-[#1E1B18] group-hover:text-[#AA8B56] truncate">
                          {prod.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#1E1B18] tabular-nums">
                          {prod.priceDisplay}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Articles Found */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8F7040] mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Journal Articles ({filteredArticles.length})</span>
              </div>

              {filteredArticles.length === 0 ? (
                <p className="text-xs text-[#8E877D] italic">No matching articles found.</p>
              ) : (
                <div className="space-y-2">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="p-3 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-colors cursor-pointer group flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#AA8B56]">
                          {article.category} · {article.readingTime}
                        </span>
                        <h4 className="font-serif text-sm text-[#1E1B18] group-hover:text-[#AA8B56] font-medium">
                          {article.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#AA8B56] shrink-0" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
