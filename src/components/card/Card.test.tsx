import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    test('should render correctly', () => {
        const component = renderer.create(<Card title="Notification">You are the best!</Card>);
        let tree = component.toJSON() as ReactTestRendererJSON;
        expect(tree).toMatchSnapshot();
    });
});
