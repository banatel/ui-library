import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './pagination.css';
function clamp(n, min, max) { return Math.max(min, Math.min(n, max)); }
export default function Pagination({ currentPage, totalPages, onPageChange, className, ...rest }) {
    const prev = () => onPageChange(clamp(currentPage - 1, 1, totalPages));
    const next = () => onPageChange(clamp(currentPage + 1, 1, totalPages));
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7); // simple: first 7
    return (_jsxs("div", { className: ["pagination", className].filter(Boolean).join(' '), ...rest, children: [_jsx("button", { className: "pagination__button", onClick: prev, disabled: currentPage <= 1, type: "button", children: "Prev" }), _jsxs("div", { className: "pagination__pages", children: [pages.map(p => (_jsx("button", { type: "button", className: ["pagination__page", p === currentPage && 'is-active'].filter(Boolean).join(' '), onClick: () => onPageChange(p), children: p }, p))), totalPages > pages.length && _jsx("span", { className: "pagination__ellipsis", children: "\u2026" })] }), _jsx("button", { className: "pagination__button", onClick: next, disabled: currentPage >= totalPages, type: "button", children: "Next" })] }));
}
