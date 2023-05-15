import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta<typeof SearchBox> = {
    title: 'Provider/Search Box',
    component: SearchBox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {};
