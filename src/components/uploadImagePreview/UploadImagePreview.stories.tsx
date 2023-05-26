import type { Meta, StoryObj } from '@storybook/react';
import UploadImagePreview from './UploadImagePreview';

const meta: Meta<typeof UploadImagePreview> = {
    title: 'Provider/Upload Image',
    component: UploadImagePreview,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UploadImagePreview>;

export const Default: Story = {};
