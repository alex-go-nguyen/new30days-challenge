import React from 'react';
import renderer from 'react-test-renderer';
import RangeSlider from './RangeSlider';

describe('RangeSlider', () => {
    const component = renderer.create(<RangeSlider />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
