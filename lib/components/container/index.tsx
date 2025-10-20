import type { HTMLAttributes } from 'react';
import './container.css';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export default function Container({ size = 'lg', className, ...rest }: ContainerProps) {
  return (
    <div
      className={cx('container', `container--${size}`, className)}
      data-size={size}
      {...rest}
    />
  );
}
