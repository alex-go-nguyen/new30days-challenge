import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'MEDIA AND ICONS/Image',
    component: Image,
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
type Story = StoryObj<typeof Image>;

export const Zoom: Story = {
    args: {
        src: 'https://images.squarespace-cdn.com/content/v1/565d01afe4b0e37ee5012f4e/7eb02544-5f08-49b7-aa6c-51ed746184d5/alexander-62h8IRF5xDU-unsplash.jpg',
        alt: 'squirrel',
        ratio: 4 / 3,
        borderRadius: 'none',
    },
};
