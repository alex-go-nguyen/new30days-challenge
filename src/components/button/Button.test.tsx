import React from 'react';
import renderer, { ReactTestRendererJSON, act } from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Button color="success" variant="primary">
                Button
            </Button>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('triggers onClick event', () => {
        const mockOnClick = jest.fn();
        const component = renderer.create(<Button onClick={mockOnClick}>Button</Button>);
        act(() => component.root.props.onClick());
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('Should have correct content', () => {
        const component = renderer.create(<Button>Click me!</Button>);
        const tree = component.toJSON() as ReactTestRendererJSON;
        expect(tree.children).toEqual(['Click me!']);
    });
});
