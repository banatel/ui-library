import type { TableHTMLAttributes } from 'react';
import './datatable.css';

export interface DataTableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: DataTableColumn[];
  data: Array<Record<string, any>>;
  emptyMessage?: string;
}

export default function DataTable({ columns, data, emptyMessage = 'No data', className, ...rest }: DataTableProps) {
  return (
    <table className={["datatable", className].filter(Boolean).join(' ')} {...rest}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td className="datatable__empty" colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        ) : (
          data.map((row, i) => (
            <tr key={i}>
              {columns.map(col => (
                <td key={col.key}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
