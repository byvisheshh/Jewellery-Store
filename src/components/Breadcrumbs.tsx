import React from "react";
import { Link } from "./Link";
import { BreadcrumbItem } from "../utils/seo";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  if (!items || items.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-xs text-[#8E877D] overflow-x-auto whitespace-nowrap scrollbar-none ${className}`}
    >
      <ol className="flex items-center gap-1.5 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.url + index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#D8C6A5] shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-[#1E1B18] max-w-[240px] sm:max-w-md truncate"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-[#AA8B56] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#AA8B56] rounded-xs"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
