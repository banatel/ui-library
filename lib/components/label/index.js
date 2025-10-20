import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './label.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export function Label({ className, children, requiredIndicator, ...rest }) {
    return (_jsxs("label", { className: cx('label', className), ...rest, children: [children, requiredIndicator && _jsx("span", { className: "label__asterisk", "aria-hidden": "true", children: "*" })] }));
}
export default Label;
