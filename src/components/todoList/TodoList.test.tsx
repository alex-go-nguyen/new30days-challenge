import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

describe('TodoList component', () => {
    const component = renderer.create(
        <TodoList
            data={[
                { id: '1', content: 'HTML' },
                { id: '2', content: 'CSS' },
            ]}
        />,
    );
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
