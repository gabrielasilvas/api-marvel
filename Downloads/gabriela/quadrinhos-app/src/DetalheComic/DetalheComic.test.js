import { render, screen } from '@testing-library/react';
import DetalheComic from './DetalheComic';

test('Deve conter o corpo de detalhes do comic', () => {
  render(<DetalheComic match={{params: {id: 1}}}/>);
  const corpo = screen.getByTestId('detalhe-body');
  expect(corpo).toBeInTheDocument();
});

test('Deve conter a capa do comic', () => {
    render(<DetalheComic match={{params: {id: 1}}}/>);
    const capa = screen.getByTestId('capa-comic');
    expect(capa).toBeInTheDocument();
});