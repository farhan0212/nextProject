"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "../../../lib/utils";

function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({ page, href, position, isActive }) => {
    return (
      <Link
        href={href}
        className={`mt-8 w-12 h-12 flex items-center justify-center border-4 border-black text-xl
          ${
            isActive
              ? "bg-pink-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              : "bg-white text-black hover:bg-gray-200"
          } hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all
          ${position === "middle" ? "cursor-default" : ""}`}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({ href, direction, isDisabled }) => {
    const Icon = direction === "left" ? ChevronLeft : ChevronRight;

    return (
      <Link
        href={!isDisabled ? href : "#"}
        className={`mt-8 flex items-center justify-center w-12 h-12 bg-yellow-400 text-black border-4 border-black
          ${
            !isDisabled
              ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              : "opacity-50 cursor-not-allowed"
          }
          transition-all`}>
        <Icon size={24} />
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4 font-bold">
      <PaginationArrow
        direction="left"
        href={createPageUrl(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position = "middle";
        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={page + index}
            page={page}
            href={createPageUrl(page)}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        href={createPageUrl(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

export default Pagination;
