import { render, screen } from '@testing-library/react';
import App from './App';

test('Deve desenhar a lista não ordenada de comics', () => {
  render(<App />);
  const listaNaoOrdenada = screen.getByTestId('lista-comics');
  expect(listaNaoOrdenada).toBeInTheDocument();
});
