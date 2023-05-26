import React from 'react';
import renderer from 'react-test-renderer';
import ShowToast from './ShowToast';
jest.useFakeTimers();

describe('ShowToast component', () => {
    const component = renderer.create(<ShowToast />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
