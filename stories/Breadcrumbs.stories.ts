import type { Meta, StoryObj } from '@storybook/react-vite';
import Breadcrumbs from '../lib/components/breadcrumbs';
const meta = {
    title: "Components/BreadcrumbsNav",
    component: Breadcrumbs,
    tags: ['autodocs'], // Enables auto-generated Docs pages (Docs tab) for this component using Storybook Autodocs/addon-docs.
    args: {items: [{label: "Dashboard", href: "#"}, {label: "View 1", href: "#"},{label: "View 2"}], separator: ':', truncate: false},
    argTypes: {separator: {control: "text"}, truncate: {control: "boolean"}}
} satisfies Meta<typeof Breadcrumbs>
export default meta
type Story = StoryObj<typeof meta>; // Derives the Story type from the default export (meta) so stories are strongly typed (args, controls, etc.).
export const Basic: Story = {args: {}} // Declares a story named "Basic" that renders with meta.args (overridable by args here).
export const LongLabels: Story = {args: {items: [{label: 'Very long home label that should truncate gracefully in small layouts', href: '#'}, { label: 'Another extremely verbose section title to test overflow', href: '#' },
{ label: 'Current page with long label' },],
truncate: true}
}
export const CustomSeparator: Story = { args: { separator: '>' } };
export const SingleItem: Story = { args: { items: [{ label: 'Dashboard' }] } };