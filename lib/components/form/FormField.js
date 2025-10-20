import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../label';
import './form.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export default function FormField({ label, htmlFor, description, error, requiredIndicator, className, children, ...rest }) {
    return (_jsxs("div", { className: cx('form-field', className), ...rest, children: [label && (_jsx(Label, { htmlFor: htmlFor, requiredIndicator: requiredIndicator, className: "form-field__label", children: label })), _jsx("div", { className: "form-field__control", children: children }), description && !error && _jsx("div", { className: "form-field__description", children: description }), error && _jsx("div", { className: "form-field__error", role: "alert", children: error })] }));
}
