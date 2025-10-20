import React, { forwardRef } from 'react';
import './button.css';

export interface ButtonRootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  loading?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ className, fullWidth = false, loading = false, disabled, type, onClick, children, ...rest }, ref) => {
    const finalClassName = cx(
      'btn',
      fullWidth && 'btn--full',
      loading && 'is-loading',
      disabled && 'is-disabled',
      className
    );

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (disabled || loading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={finalClassName}
        data-loading={loading ? 'true' : undefined}
        disabled={disabled}
        aria-busy={loading || undefined}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default ButtonRoot;

