import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import App from '../../App';
describe("<Header />", () => {
    it('Toggle Color Mode button', () => {
        render(<Header />);
        expect(screen.getByTestId('toggle-color-mode'));
    });
});

