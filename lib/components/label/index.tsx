import type { LabelHTMLAttributes } from 'react';
import './label.css';

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  requiredIndicator?: boolean;
};

export function Label({ className, children, requiredIndicator, ...rest }: LabelProps) {
  return (
    <label
      className={cx('label', className)}
      {...rest}
    >
      {children}
      {requiredIndicator && <span className="label__asterisk" aria-hidden="true">*</span>}
    </label>
  );
}

export default Label;