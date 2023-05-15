import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Provider/Modal',
    component: Modal,
    tags: ['autodocs'],
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
