import renderer from 'react-test-renderer';
import React from 'react';
import ImageList from './ImageList';

describe('ImageList component', () => {
    const component = renderer.create(
        <ImageList
            data={[
                {
                    id: 1,
                    src: 'https://images.squarespace-cdn.com/content/v1/565d01afe4b0e37ee5012f4e/7eb02544-5f08-49b7-aa6c-51ed746184d5/alexander-62h8IRF5xDU-unsplash.jpg',
                },
                {
                    id: 2,
                    src: 'https://blue.kumparan.com/image/upload/v1634025439/01810a16a6bb874836ffc4f7210b04ec.jpg',
                },
            ]}
        />,
    );
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
