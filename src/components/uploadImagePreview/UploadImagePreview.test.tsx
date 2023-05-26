import React from 'react';
import renderer from 'react-test-renderer';
import UploadImagePreview from './UploadImagePreview';

describe('UploadImagePreview', () => {
    const component = renderer.create(<UploadImagePreview />);
    let tree = component.toJSON();
    test('should render correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
