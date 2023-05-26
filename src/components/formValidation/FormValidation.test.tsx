import React from 'react';
import renderer, { ReactTestRendererJSON, act } from 'react-test-renderer';
import FormVadiation from './FormValidation';

describe('FormValidation component', () => {
    test('should render correctl', () => {
        const component = renderer.create(<FormVadiation />);
        let tree = component.toJSON() as ReactTestRendererJSON;
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('form');
    });
});
