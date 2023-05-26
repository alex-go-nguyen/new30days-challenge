import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('Modal component', () => {
    const component = renderer.create(<Modal title="Success">Hello success</Modal>);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
