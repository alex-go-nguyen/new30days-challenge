import type { Meta, StoryObj } from '@storybook/react';
import TodoList from './TodoList';

const meta: Meta<typeof TodoList> = {
    title: 'Provider/Todo List',
    component: TodoList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {};
