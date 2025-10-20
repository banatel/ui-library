import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import './modal.css';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
}

export default function Modal({ open, onClose, title, className, children, ...rest }: ModalProps) {
  if (!open) return null;

  const onOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal__overlay" onClick={onOverlayClick}>
      <div
        className={['modal', className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        {...rest}
      >
        {title && <div className="modal__header">{title}</div>}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
