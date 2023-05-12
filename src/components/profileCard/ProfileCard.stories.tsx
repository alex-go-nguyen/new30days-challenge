import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'Provider/Profile Card',
    component: ProfileCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // parameters: {
    //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'centered',
    // },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        imageUrl: 'https://harpersbazaar.com.au/wp-content/uploads/2022/11/jack-titanic.jpg',
    },
};
