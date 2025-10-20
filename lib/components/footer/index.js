import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './footer.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export default function Footer({ left, center, right, sticky, className, ...rest }) {
    return (_jsxs("footer", { className: cx('footer', sticky && 'footer--sticky', className), ...rest, children: [_jsx("div", { className: "footer__section footer__section--left", children: left }), _jsx("div", { className: "footer__section footer__section--center", children: center }), _jsx("div", { className: "footer__section footer__section--right", children: right })] }));
}
