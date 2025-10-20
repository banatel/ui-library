import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonRoot as ButtonNew } from '../lib/components/button/ButtonRoot';

const meta = {
  title: 'Components/ButtonNew',
  component: ButtonNew,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: { loading: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
