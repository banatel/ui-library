import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../lib/components/label';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Email',
    htmlFor: 'email',
    requiredIndicator: true,
  },
  argTypes: {
    children: { control: 'text' },
    htmlFor: { control: 'text' },
    requiredIndicator: { control: 'boolean' },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
