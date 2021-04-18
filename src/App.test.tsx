import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// it('Renders Test In Development Message', () => {
//   render(<App />);
//   expect(screen.getByText('Welcome to my web app!!!')).toBeInTheDocument();
// }); 

it('Renders Loader', () => {
  render(<App />);
  expect(screen.getByTestId('loader-slider'));
});