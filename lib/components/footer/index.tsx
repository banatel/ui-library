import type { HTMLAttributes, ReactNode } from 'react';
import './footer.css';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  sticky?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export default function Footer({ left, center, right, sticky, className, ...rest }: FooterProps) {
  return (
    <footer className={cx('footer', sticky && 'footer--sticky', className)} {...rest}>
      <div className="footer__section footer__section--left">{left}</div>
      <div className="footer__section footer__section--center">{center}</div>
      <div className="footer__section footer__section--right">{right}</div>
    </footer>
  );
}
