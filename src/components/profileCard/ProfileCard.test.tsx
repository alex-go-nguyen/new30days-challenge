import React from 'react';
import renderer from 'react-test-renderer';
import ProfileCard from './ProfileCard';

describe('Profile Card component', () => {
    const component = renderer.create(
        <ProfileCard imageUrl={'https://harpersbazaar.com.au/wp-content/uploads/2022/11/jack-titanic.jpg'} />,
    );
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
