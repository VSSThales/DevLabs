import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import ListaVitrine from "../components/ListaVitrine";
import { getVitrines } from "../helpers/VitrineHelpers";
import { MemoryRouter } from "react-router-dom";

jest.mock('../helpers/VitrineHelpers', () => ({
  getVitrines: jest.fn(),
}));

describe('ListaVitrine', () =>{
  beforeEach(() => {
    jest.clearAllMocks();
    getVitrines.mockReturnValue([
      {code: '001', name: 'Vitrine 1'},
      {code: '002', name: 'Vitrine 2'},
    ])
  });

  test('renderiza a lista de vitrines', () => {
    render(
      <MemoryRouter>
        <ListaVitrine />
      </MemoryRouter>
    );
    expect(screen.getByText('Vitrines Cadastradas')).toBeInTheDocument();
    expect(screen.getByText('Vitrines Cadastradas')).toBeInTheDocument();
    expect(screen.getByText('Vitrines Cadastradas')).toBeInTheDocument();
    expect(screen.getByText('link').lenght).toBe(3);
  });

  test('Renderiza o botão Nova Vitrine', () => {
    render(
      <MemoryRouter>
        <ListaVitrine />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', {name: /Nova Vitrine/i })).toBeInTheDocument();
  });
});