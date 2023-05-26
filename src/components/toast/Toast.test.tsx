import React from 'react';
import renderer from 'react-test-renderer';
import Toast from './Toast';

describe('Toast component', () => {
    const component = renderer.create(<Toast message="Hello my toast" />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
