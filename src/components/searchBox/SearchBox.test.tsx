import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    const component = renderer.create(<SearchBox />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
