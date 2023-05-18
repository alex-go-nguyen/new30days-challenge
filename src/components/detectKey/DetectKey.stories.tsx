import type { Meta, StoryObj } from '@storybook/react';
import DetectKey from './DetectKey';

const meta: Meta<typeof DetectKey> = {
    title: 'Provider/Detect Key',
    component: DetectKey,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DetectKey>;

export const Default: Story = {};
