import { render, screen } from '@testing-library/react';
import AppGame from './AppGame';


test('renders app title', () => {
  render(<AppGame/>);
  const titleElement = screen.getByText(/Bienvenido a Piedra, Papel o Tijeras/i);
  expect(titleElement).toBeInTheDocument();
});
