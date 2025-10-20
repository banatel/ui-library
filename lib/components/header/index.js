import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './header.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export default function Header({ left, center, right, sticky, className, ...rest }) {
    return (_jsxs("header", { className: cx('header', sticky && 'header--sticky', className), ...rest, children: [_jsx("div", { className: "header__section header__section--left", children: left }), _jsx("div", { className: "header__section header__section--center", children: center }), _jsx("div", { className: "header__section header__section--right", children: right })] }));
}
