import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './modal.css';
export default function Modal({ open, onClose, title, className, children, ...rest }) {
    if (!open)
        return null;
    const onOverlayClick = (e) => {
        if (e.target === e.currentTarget)
            onClose();
    };
    return (_jsx("div", { className: "modal__overlay", onClick: onOverlayClick, children: _jsxs("div", { className: ['modal', className].filter(Boolean).join(' '), role: "dialog", "aria-modal": "true", "aria-label": typeof title === 'string' ? title : undefined, ...rest, children: [title && _jsx("div", { className: "modal__header", children: title }), _jsx("div", { className: "modal__body", children: children })] }) }));
}
