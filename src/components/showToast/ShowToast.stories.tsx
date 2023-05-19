import type { Meta, StoryObj } from '@storybook/react';
import ShowToast from './ShowToast';

const meta: Meta<typeof ShowToast> = {
    title: 'Provider/Show Toast',
    component: ShowToast,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShowToast>;

export const Default: Story = {};
