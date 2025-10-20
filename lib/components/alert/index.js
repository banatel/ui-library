import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './alert.css';
export default function Alert({ variant = 'info', title, className, children, role = 'alert', ...rest }) {
    return (_jsxs("div", { className: ["alert", `alert--${variant}`, className].filter(Boolean).join(' '), role: role, ...rest, children: [title && _jsx("div", { className: "alert__title", children: title }), children && _jsx("div", { className: "alert__content", children: children })] }));
}
