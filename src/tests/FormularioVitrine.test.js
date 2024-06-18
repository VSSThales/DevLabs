import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormularioVitrine from './FormularioVitrine';
import api from '../services/FakeAPI';
import { getVitrineByCode, getVitrines, setVitrines, updateVitrine } from '../helpers/VitrineHelpers';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('../services/FakeAPI');
jest.mock('../helpers/VitrineHelpers');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useParams: () => ({ codeVitrine: '123' }),
}));

const mockedNavigate = jest.fn();

describe('FormularioVitrine', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('react-router-dom').useNavigate.mockImplementation(() => mockedNavigate);
    getVitrineByCode.mockReturnValue({
      name: 'Test Vitrine',
      code: '123',
      produtoID: '1,2,3',
    });
    getVitrines.mockReturnValue([]);
    api.get.mockResolvedValue({ data: new Array(10).fill({}) });
  });

  test('Renderiza o formulário com dados iniciais', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<FormularioVitrine />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Titulo:/i)).toHaveValue('Test Vitrine');
    expect(screen.getByLabelText(/Código:/i)).toHaveValue('123');
    expect(screen.getByLabelText(/ID de Produto/i)).toHaveValue('1,2,3');
    await waitFor(() => {expect(screen.getByText(/Quantidade de produtos: 10/i)).toBeInTheDocument()});
  });

  test('Verifica no formulario a existencia de um código existente na Vitrine', async () => {
    updateVitrine.mockImplementation(() => {});
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<FormularioVitrine />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/Titulo:/i), { target: { value: 'Updated Vitrine' } });
    fireEvent.change(screen.getByLabelText(/ID de Produto/i), { target: { value: '4,5,6' } });
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));
    await waitFor(() => {
      expect(updateVitrine).toHaveBeenCalledWith({
        name: 'Updated Vitrine',
        code: '123',
        produtoID: [4, 5, 6],
      });
    });
    expect(mockedNavigate).toHaveBeenCalledWith('/vitrine/123');
  });

  test('Confirma o envio de um novo formulario', async () => {
    getVitrineByCode.mockReturnValue(null);
    getVitrines.mockReturnValue([]);
    setVitrines.mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<FormularioVitrine />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/Titulo:/i), { target: { value: 'New Vitrine' } });
    fireEvent.change(screen.getByLabelText(/Código:/i), { target: { value: '456' } });
    fireEvent.change(screen.getByLabelText(/ID de Produto/i), { target: { value: '7,8,9' } });
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));
    await waitFor(() => {
      expect(setVitrines).toHaveBeenCalled();
    });
    expect(mockedNavigate).toHaveBeenCalledWith('/vitrines');
  });
});
