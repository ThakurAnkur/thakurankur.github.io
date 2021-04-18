import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageLoader } from './PageLoader';
import App from '../../App';
describe("<PageLoader />", () => {
    beforeEach(() => {
        render(<App></App>);
    });
    it('Renders Loader with showLoader to true', () => {
        render(<PageLoader />);
        expect(screen.getByTestId('loader-slider'));
    });
});

it('Renders Loader with showLoader to null', () => {
    render(<PageLoader />);
    expect(null);
});



