import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getVisiblePages(currentPage: number, totalPages: number): Array<number | string> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  const sortedPages = Array.from(pages).filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
  const result: Array<number | string> = [];

  sortedPages.forEach((page, index) => {
    const previous = sortedPages[index - 1];
    if (previous && page - previous > 1) {
      result.push("...");
    }
    result.push(page);
  });

  return result;
}

function PageButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: number;
  onClick: () => void;
}) {
  if (active) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-semibold text-charcoal-deep shadow-sm"
        aria-current="page"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-white text-sm font-medium text-charcoal/60 transition-colors hover:border-gold/50 hover:text-gold-dark"
    >
      {label}
    </button>
  );
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-semibold uppercase text-charcoal/60 transition-colors hover:border-gold/50 hover:text-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={14} />
        Prev
      </button>

      {pages.map((page, index) =>
        typeof page === "number" ? (
          <PageButton
            key={page}
            active={page === currentPage}
            label={page}
            onClick={() => onPageChange(page)}
          />
        ) : (
          <span key={`${page}-${index}`} className="px-2 text-sm text-charcoal/45">
            {page}
          </span>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-semibold uppercase text-charcoal/60 transition-colors hover:border-gold/50 hover:text-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
