import type { HTMLAttributes } from 'react';
import './badge.css';

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export default function Badge({ variant = 'neutral', className, ...rest }: BadgeProps) {
  return <span className={cx('badge', `badge--${variant}`, className)} {...rest} />;
}
