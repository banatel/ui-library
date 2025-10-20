export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: string;
  truncate?: boolean;
  className?: string;
}

export default function Breadcrumbs({ items, separator = '/', truncate = false, className }: BreadcrumbsProps) {
  const cls = ['breadcrumbs', truncate && 'breadcrumbs--truncate', className]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={cls} aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="breadcrumbs__item">
              {item.href && !isLast ? (
                <a className="breadcrumbs__link" href={item.href}>{item.label}</a>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">{item.label}</span>
              )}
              {!isLast && (
                <span className="breadcrumbs__sep" aria-hidden="true">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}