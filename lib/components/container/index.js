import { jsx as _jsx } from "react/jsx-runtime";
import './container.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export default function Container({ size = 'lg', className, ...rest }) {
    return (_jsx("div", { className: cx('container', `container--${size}`, className), "data-size": size, ...rest }));
}
