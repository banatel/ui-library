import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './card.css';
export default function Card({ header, footer, className, children, ...rest }) {
    return (_jsxs("div", { className: ["card", className].filter(Boolean).join(' '), ...rest, children: [header && _jsx("div", { className: "card__header", children: header }), _jsx("div", { className: "card__body", children: children }), footer && _jsx("div", { className: "card__footer", children: footer })] }));
}
