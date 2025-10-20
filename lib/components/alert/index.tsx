import type { HTMLAttributes, ReactNode } from 'react';
import './alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: AlertVariant;
  title?: ReactNode;
}

export default function Alert({ variant = 'info', title, className, children, role = 'alert', ...rest }: AlertProps) {
  return (
    <div className={["alert", `alert--${variant}`, className].filter(Boolean).join(' ')} role={role} {...rest}>
      {title && <div className="alert__title">{title}</div>}
      {children && <div className="alert__content">{children}</div>}
    </div>
  );
}
