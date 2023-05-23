import type { Meta, StoryObj } from '@storybook/react';
import WeatherApp from './WeatherApp';

const meta: Meta<typeof WeatherApp> = {
    title: 'Provider/Weather App',
    component: WeatherApp,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeatherApp>;

export const Default: Story = {
    args: {
        data: {
            city: 'Hanoi',
            country: 'VN',
            weather: 'Cloud',
            deg: '15',
            time: '5/23/2023 16:20:00',
            visibility: '1000',
            wind: '4.56',
            cloud: '89%',
        },
    },
};
