import renderer, { ReactTestRendererJSON, act } from 'react-test-renderer';
import React from 'react';
import Gallery from './Gallery';

describe('Gallery component', () => {
    const mockFn = jest.fn();
    const component = renderer.create(<Gallery data={[{ id: 1, src: '../cold.png' }]} index={1} onChange={mockFn} />);
    test('should render correctly', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
