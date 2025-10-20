import type { FormHTMLAttributes } from 'react';
import './form.css';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export default function Form(props: FormProps) {
  return <form className={["form", props.className].filter(Boolean).join(' ')} {...props} />;
}
