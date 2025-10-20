import { jsx as _jsx } from "react/jsx-runtime";
import './form.css';
export default function Form(props) {
    return _jsx("form", { className: ["form", props.className].filter(Boolean).join(' '), ...props });
}
