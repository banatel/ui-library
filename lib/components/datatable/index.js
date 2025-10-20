import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './datatable.css';
export default function DataTable({ columns, data, emptyMessage = 'No data', className, ...rest }) {
    return (_jsxs("table", { className: ["datatable", className].filter(Boolean).join(' '), ...rest, children: [_jsx("thead", { children: _jsx("tr", { children: columns.map(col => (_jsx("th", { children: col.header }, col.key))) }) }), _jsx("tbody", { children: data.length === 0 ? (_jsx("tr", { children: _jsx("td", { className: "datatable__empty", colSpan: columns.length, children: emptyMessage }) })) : (data.map((row, i) => (_jsx("tr", { children: columns.map(col => (_jsx("td", { children: col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '') }, col.key))) }, i)))) })] }));
}
