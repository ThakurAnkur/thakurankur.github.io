import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Renders Test In Development Message', () => {
  render(<App />);
  expect(screen.getByText('This page is development...')).toBeInTheDocument();
}); 