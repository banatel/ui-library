import type { HTMLAttributes, ReactNode } from 'react';
import './card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

export default function Card({ header, footer, className, children, ...rest }: CardProps) {
  return (
    <div className={["card", className].filter(Boolean).join(' ')} {...rest}>
      {header && <div className="card__header">{header}</div>}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}
