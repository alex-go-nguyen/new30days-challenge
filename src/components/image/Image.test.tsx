import renderer from 'react-test-renderer';
import React from 'react';
import Image from './Image';

describe('Image component', () => {
    const component = renderer.create(<Image src={'./cold.png'} />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
