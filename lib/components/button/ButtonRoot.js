import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import './button.css';
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
export const ButtonRoot = forwardRef(({ className, fullWidth = false, loading = false, disabled, type, onClick, children, ...rest }, ref) => {
    const finalClassName = cx('btn', fullWidth && 'btn--full', loading && 'is-loading', disabled && 'is-disabled', className);
    const handleClick = (e) => {
        if (disabled || loading) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        onClick?.(e);
    };
    return (_jsx("button", { ref: ref, type: type ?? 'button', className: finalClassName, "data-loading": loading ? 'true' : undefined, disabled: disabled, "aria-busy": loading || undefined, onClick: handleClick, ...rest, children: children }));
});
export default ButtonRoot;
