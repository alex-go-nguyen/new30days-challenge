import React from 'react';
import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import DetectKey from './DetectKey';

describe('DetectKey component', () => {
    let component: ReactTestRenderer;
    test('should render correctly', async () => {
        await act(async () => {
            component = renderer.create(<DetectKey />);
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
});
