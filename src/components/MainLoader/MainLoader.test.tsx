import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLoader from './MainLoader';
import App from '../../App';
describe("<MainLoader />", () => {
    beforeEach(() => {
        render(<App></App>);
    });
    it('Renders Main Loader With Home Page', () => {
        render(<MainLoader componentToLoad={React.lazy(() => import('../../Pages/Home'))}></MainLoader>);
        expect(screen.getByText(/Welcome/i));
    });
});


