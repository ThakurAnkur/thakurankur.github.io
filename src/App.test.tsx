import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// it('Renders Test In Development Message', () => {
//   render(<App />);
//   expect(screen.getByText('Still working on this...')).toBeInTheDocument();
// }); 

it('Renders Loader', () => {
  render(<App />);
  expect(screen.getByTestId('loader-slider'));
});