import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ABOUT ME/i);
  expect(linkElement).toBeInTheDocument();
});
