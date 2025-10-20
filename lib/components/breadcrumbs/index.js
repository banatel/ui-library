import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Breadcrumbs({ items, separator = '/', truncate = false, className }) {
    const cls = ['breadcrumbs', truncate && 'breadcrumbs--truncate', className]
        .filter(Boolean)
        .join(' ');
    return (_jsx("nav", { className: cls, "aria-label": "Breadcrumb", children: _jsx("ol", { className: "breadcrumbs__list", children: items.map((item, i) => {
                const isLast = i === items.length - 1;
                return (_jsxs("li", { className: "breadcrumbs__item", children: [item.href && !isLast ? (_jsx("a", { className: "breadcrumbs__link", href: item.href, children: item.label })) : (_jsx("span", { className: "breadcrumbs__current", "aria-current": "page", children: item.label })), !isLast && (_jsx("span", { className: "breadcrumbs__sep", "aria-hidden": "true", children: separator }))] }, i));
            }) }) }));
}
