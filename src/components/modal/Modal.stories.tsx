import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Provider/Modal',
    component: Modal,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // parameters: {
    //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'centered',
    // },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        type: 'success',
        title: 'Welcome to modal',
        children: <p>Ahihi</p>,
    },
};
