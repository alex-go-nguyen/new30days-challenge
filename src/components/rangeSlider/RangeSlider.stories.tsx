import type { Meta, StoryObj } from '@storybook/react';
import RangeSlider from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
    title: 'Provider/Range Slider',
    component: RangeSlider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {};
