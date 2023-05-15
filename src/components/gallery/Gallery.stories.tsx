import type { Meta, StoryObj } from '@storybook/react';
import Gallery from './Gallery';

const meta: Meta<typeof Gallery> = {
    title: 'DATA DISPLAY/Gallery',
    component: Gallery,
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
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
    args: {
        data: [
            {
                id: 1,
                src: 'https://images.squarespace-cdn.com/content/v1/565d01afe4b0e37ee5012f4e/7eb02544-5f08-49b7-aa6c-51ed746184d5/alexander-62h8IRF5xDU-unsplash.jpg',
            },
            {
                id: 2,
                src: 'https://blue.kumparan.com/image/upload/v1634025439/01810a16a6bb874836ffc4f7210b04ec.jpg',
            },
            {
                id: 3,
                src: 'https://k84n7.csb.app/img2.jpeg',
            },
            {
                id: 4,
                src: 'https://cdn.theatlantic.com/media/img/photo/2021/11/winners-2021-natural-landscape-phot/a02_proy_539__5138/main_1500.jpg',
            },
        ],
        index: 0,
    },
};
