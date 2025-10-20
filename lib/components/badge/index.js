import { jsx as _jsx } from "react/jsx-runtime";
import './badge.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export default function Badge({ variant = 'neutral', className, ...rest }) {
    return _jsx("span", { className: cx('badge', `badge--${variant}`, className), ...rest });
}
