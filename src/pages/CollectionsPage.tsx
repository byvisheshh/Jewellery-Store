import React, { useState, useMemo } from "react";
import { PRODUCTS, Product, JewelleryCategory, JewelleryType, MetalType } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Filter, X, SlidersHorizontal, Sparkles } from "lucide-react";

interface CollectionsPageProps {
  onSelectProduct: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  onToggleWishlist: (product: Product) => void;
  initialCategory?: string;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectProduct,
  isWishlisted,
  onToggleWishlist,
  initialCategory = "All",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedMetal, setSelectedMetal] = useState<string>("All");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number>(2000000);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = ["All", "Gold", "Diamond", "Bridal", "Men's Jewellery", "Everyday Jewellery"];
  const jewelleryTypes = ["All", "Necklaces", "Rings", "Earrings", "Bangles", "Bracelets", "Pendants", "Bridal Sets"];
  const metals = ["All", "22K Gold", "18K Gold"];
  const occasions = ["All", "Weddings", "Festivals", "Daily Wear", "Milestones"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      // Type filter
      if (selectedType !== "All" && p.jewelleryType !== selectedType) return false;
      // Metal filter
      if (selectedMetal !== "All" && !p.metal.includes(selectedMetal)) return false;
      // Price filter
      if (p.price > priceRange) return false;
      // Occasion filter
      if (selectedOccasion !== "All" && !p.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0; // default order
    });
  }, [selectedCategory, selectedType, selectedMetal, selectedOccasion, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedMetal("All");
    setSelectedOccasion("All");
    setPriceRange(2000000);
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedType !== "All" ||
    selectedMetal !== "All" ||
    selectedOccasion !== "All" ||
    priceRange < 2000000;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
          High Jewellery Catalogue
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal">
          The Jewellery Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#666057] leading-relaxed">
          Explore our complete archive of 22K hallmarked gold ornaments, certified natural diamonds, and heritage bridal suites.
        </p>
      </div>

      {/* Main Filter Bar & Results Count */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
        {/* Category Segmented Buttons */}
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

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E8E2D8] text-[#1E1B18] font-medium"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[#8E877D] hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#E8E2D8] px-2.5 py-1.5 text-xs text-[#1E1B18] focus:outline-none focus:border-[#AA8B56]"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Sidebar + Product Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Filter Sidebar */}
        <div className={`lg:col-span-3 space-y-6 bg-white p-6 border border-[#E8E2D8] ${showMobileFilters ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[#F4EFE6]">
            <h3 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-[#AA8B56]" />
              <span>Refine Pieces</span>
            </h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#8F7040] hover:underline cursor-pointer"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Jewellery Type Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider block">
              Jewellery Type
            </label>
            <div className="space-y-1 text-xs">
              {jewelleryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left py-1 px-2 rounded transition-colors flex items-center justify-between cursor-pointer ${
                    selectedType === type
                      ? "bg-[#F4EFE6] text-[#705530] font-semibold"
                      : "text-[#666057] hover:text-[#1E1B18]"
                  }`}
                >
                  <span>{type}</span>
                  {selectedType === type && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Metal Filter */}
          <div className="space-y-2 pt-2 border-t border-[#F4EFE6]">
            <label className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider block">
              Precious Metal
            </label>
            <div className="space-y-1 text-xs">
              {metals.map((metal) => (
                <button
                  key={metal}
                  onClick={() => setSelectedMetal(metal)}
                  className={`w-full text-left py-1 px-2 rounded transition-colors flex items-center justify-between cursor-pointer ${
                    selectedMetal === metal
                      ? "bg-[#F4EFE6] text-[#705530] font-semibold"
                      : "text-[#666057] hover:text-[#1E1B18]"
                  }`}
                >
                  <span>{metal}</span>
                  {selectedMetal === metal && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-2 pt-2 border-t border-[#F4EFE6]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1E1B18] uppercase tracking-wider">Max Price</span>
              <span className="font-medium text-[#705530] tabular-nums">
                ₹{priceRange.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="50000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-[#AA8B56] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8E877D]">
              <span>₹50,000</span>
              <span>₹20,00,000+</span>
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="space-y-2 pt-2 border-t border-[#F4EFE6]">
            <label className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider block">
              Occasion
            </label>
            <div className="space-y-1 text-xs">
              {occasions.map((occ) => (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`w-full text-left py-1 px-2 rounded transition-colors flex items-center justify-between cursor-pointer ${
                    selectedOccasion === occ
                      ? "bg-[#F4EFE6] text-[#705530] font-semibold"
                      : "text-[#666057] hover:text-[#1E1B18]"
                  }`}
                >
                  <span>{occ}</span>
                  {selectedOccasion === occ && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#8E877D]">
            <span>Showing <strong className="text-[#1E1B18]">{filteredProducts.length}</strong> creations</span>
            {hasActiveFilters && (
              <span className="text-[#8F7040]">Filtered by selected attributes</span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white border border-[#E8E2D8] p-8 space-y-3">
              <span className="font-serif text-3xl text-[#D8C6A5]">VJ</span>
              <h3 className="font-serif text-xl text-[#1E1B18]">No Creations Match Selected Filters</h3>
              <p className="text-xs text-[#666057] max-w-sm mx-auto">
                Try widening your price range or clearing specific filter criteria to view more pieces from our collection.
              </p>
              <button
                onClick={resetFilters}
                className="mt-2 px-5 py-2 bg-[#1E1B18] text-white text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                  isWishlisted={isWishlisted(product.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
