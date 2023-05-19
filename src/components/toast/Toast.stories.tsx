import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
    title: 'Provider/Toast',
    component: Toast,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
    args: {
        variant: 'success',
        message: 'You got the Successful!',
        isOpen: false,
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        message: 'You got the Warning!',
        isOpen: false,
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        message: 'You got the Error!',
        isOpen: false,
    },
};
