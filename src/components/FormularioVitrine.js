import React, { useState, useEffect } from 'react';
import api from '../services/FakeAPI';

const FormularioVitrine = ({ onSave }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [produtoID, setProdutoID] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products').then(Response => setProdutos(Response.data))
  },);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idsArray = produtoID.split(',').map(id => parseInt(id.trim()));
    onSave({ name, code, produtoID: idsArray });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Código:</label>
        <input type="text" value={code} onChange={e => setCode(e.target.value)} required />
      </div>
      <div>
        <label>ID de Produto:</label>
        <input type="text" value={produtoID} onChange={e => setProdutoID(e.target.value)} required />
      </div>
      <button type='submit'>Salvar</button>
    </form>
  )
}

export default FormularioVitrine;

