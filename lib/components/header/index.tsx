import type { HTMLAttributes, ReactNode } from 'react';
import './header.css';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  sticky?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export default function Header({ left, center, right, sticky, className, ...rest }: HeaderProps) {
  return (
    <header className={cx('header', sticky && 'header--sticky', className)} {...rest}>
      <div className="header__section header__section--left">{left}</div>
      <div className="header__section header__section--center">{center}</div>
      <div className="header__section header__section--right">{right}</div>
    </header>
  );
}
