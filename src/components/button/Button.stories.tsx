import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'ATOMS/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        variant: 'primary',
        children: 'Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        variant: 'primary',
        children: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        variant: 'primary',
        children: 'Button',
    },
};
