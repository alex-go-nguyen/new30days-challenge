import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('changes the class when hovered', () => {
    const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        if (Array.isArray(tree)) {
            tree[0]?.props.onMouseEnter();
        } else {
            tree?.props.onMouseEnter();
        }
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        if (Array.isArray(tree)) {
            tree[0]?.props.onMouseLeave();
        } else {
            tree?.props.onMouseLeave();
        }
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
