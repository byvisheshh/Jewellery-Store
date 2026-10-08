import React, { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-square",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gradient-to-br from-[#F5EEDF] via-[#FAF8F5] to-[#EAE0CE] flex flex-col items-center justify-center p-6 text-center border border-[#E8E2D8] ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full border border-[#C2A77A]/40 flex items-center justify-center mb-2 bg-[#FAF8F5]/80">
          <span className="font-serif text-lg tracking-widest text-[#AA8B56]">VJ</span>
        </div>
        <span className="font-serif text-xs text-[#8F7040] tracking-wider uppercase">
          Vanya Jewellers
        </span>
        <span className="text-[11px] text-[#8E877D] mt-1 line-clamp-1 max-w-[200px]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F5EEDF]/40 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F4EFE6] animate-pulse flex items-center justify-center">
          <span className="font-serif text-xs tracking-widest text-[#AA8B56]/60">VANYA</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        {...props}
      />
    </div>
  );
};
