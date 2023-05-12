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

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Button',
    },
};
