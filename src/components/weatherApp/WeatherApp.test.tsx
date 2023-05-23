import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON, act } from 'react-test-renderer';
import WeatherApp from './WeatherApp';

describe('WeatherApp component', () => {
    const component = renderer.create(
        <WeatherApp
            data={{
                city: 'string',
                country: 'string',
                weather: 'string',
                deg: 'string',
                time: 'string',
                visibility: 'string',
                wind: 'string',
                cloud: 'string',
            }}
        />,
    );
    let tree = component.toJSON() as ReactTestRendererJSON;
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
