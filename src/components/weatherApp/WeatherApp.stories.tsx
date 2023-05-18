import type { Meta, StoryObj } from '@storybook/react';
import WeatherApp from './WeatherApp';

const meta: Meta<typeof WeatherApp> = {
    title: 'Provider/Weather App',
    component: WeatherApp,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeatherApp>;

export const Default: Story = {};
