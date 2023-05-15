import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'ATOMS/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // parameters: {
    //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'centered',
    // },
    //    argTypes: {
    //         backgroundColor: {
    //             control: 'color',
    //         },
    //     },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: 'primary',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        variant: 'primary',
        label: 'Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        variant: 'primary',
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        variant: 'primary',
        label: 'Button',
    },
};
