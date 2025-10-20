import type { HTMLAttributes, ReactNode } from 'react';
import { Label } from '../label';
import './form.css';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  htmlFor?: string;
  description?: ReactNode;
  error?: ReactNode;
  requiredIndicator?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export default function FormField({ label, htmlFor, description, error, requiredIndicator, className, children, ...rest }: FormFieldProps) {
  return (
    <div className={cx('form-field', className)} {...rest}>
      {label && (
        <Label htmlFor={htmlFor} requiredIndicator={requiredIndicator} className="form-field__label">
          {label}
        </Label>
      )}
      <div className="form-field__control">
        {children}
      </div>
      {description && !error && <div className="form-field__description">{description}</div>}
      {error && <div className="form-field__error" role="alert">{error}</div>}
    </div>
  );
}
