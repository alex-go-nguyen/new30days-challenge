import type { Meta, StoryObj } from '@storybook/react';
import FormValidation from './FormValidation';

const meta: Meta<typeof FormValidation> = {
    title: 'FORM/Form Validation',
    component: FormValidation,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormValidation>;

export const Default: Story = {};
