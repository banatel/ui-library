import type { HTMLAttributes } from 'react';
import './pagination.css';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(n, max)); }

export default function Pagination({ currentPage, totalPages, onPageChange, className, ...rest }: PaginationProps) {
  const prev = () => onPageChange(clamp(currentPage - 1, 1, totalPages));
  const next = () => onPageChange(clamp(currentPage + 1, 1, totalPages));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7); // simple: first 7

  return (
    <div className={["pagination", className].filter(Boolean).join(' ')} {...rest}>
      <button className="pagination__button" onClick={prev} disabled={currentPage <= 1} type="button">Prev</button>
      <div className="pagination__pages">
        {pages.map(p => (
          <button
            key={p}
            type="button"
            className={["pagination__page", p === currentPage && 'is-active'].filter(Boolean).join(' ')}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
        {totalPages > pages.length && <span className="pagination__ellipsis">…</span>}
      </div>
      <button className="pagination__button" onClick={next} disabled={currentPage >= totalPages} type="button">Next</button>
    </div>
  );
}
