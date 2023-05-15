import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta<typeof SearchBox> = {
    title: 'Provider/Search Box',
    component: SearchBox,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // parameters: {
    //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'centered',
    // },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {};
