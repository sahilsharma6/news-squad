import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      if (currentPage > 4) {
        pageNumbers.push("...");
      }

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <nav className="flex items-center justify-center mt-6 space-x-2">
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "p-2 flex items-center justify-center",
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        )}
      >
        Previous<ChevronLeftIcon className="h-5 w-5" />
      </button>

      {/* Page numbers */}
      {renderPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="flex items-center justify-center text-gray-500">
            <DotsHorizontalIcon className="h-5 w-5" />
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={cn(
              buttonVariants({ variant: currentPage === page ? "solid" : "outline" }),
              "px-3 py-1",
              currentPage === page && "bg-blue-500 text-white"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "p-2 flex items-center justify-center",
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        )}
      >
      Next  <ChevronRightIcon className="h-5 w-5" />
      </button>
    </nav>
  );
};

export default Pagination;
