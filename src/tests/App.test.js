import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Home from './pages/Home'; 

jest.mock('./pages/Home', () => Home);
jest.mock('./pages/NovaVitrine', () => () => <div>Nova Vitrine</div>);
jest.mock('./pages/Vitrine', () => () => <div>Vitrine</div>);
jest.mock('./pages/DetalheVitrine', () => () => <div>Detalhe Vitrine</div>);

test('renderiza a pagina Home por padrão', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('Navega para a pagina Nova Vitrine ao clicar', () => {
  render(<App />);
  const novaVitrineLink = screen.getByRole('link', { name: /Nova Vitrine/i });
  userEvent.click(novaVitrineLink);
  expect(screen.getByText(/Nova Vitrine/i)).toBeInTheDocument();
});

test('Navega para a pagina Vitrines ao clicar', () => {
  render(<App />);
  const vitrineLink = screen.getByRole('link', { name: /Vitrine/i });
  userEvent.click(vitrineLink);
  expect(screen.getByText(/Vitrine/i)).toBeInTheDocument();
});