import React, { useState, useEffect } from 'react';
import api from '../services/FakeAPI';
import { getVitrineByCode, getVitrines, setVitrines, updateVitrine } from '../helpers/VitrineHelpers';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/FormularioVitrine.css"

const FormularioVitrine = () => {
  const navigate = useNavigate();
  const { codeVitrine } = useParams();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [produtoID, setProdutoID] = useState('');
  const [totalProdutos, setTotalProdutos] = useState('');

  useEffect(() => {
    const vitrineByCode = getVitrineByCode(codeVitrine);
    if (vitrineByCode) {
      setName(vitrineByCode.name);
      setCode(vitrineByCode.code);
      setProdutoID(vitrineByCode.produtoID);
    }
  }, [codeVitrine]);

  useEffect(() => {
    const fetchTotalProdutos = async () => {
      try{
        const totalProduto = await api.get('/products');
        setTotalProdutos(totalProduto.data.length);
      }catch(error){
        console.error('Erro ao buscar o')
      };
    };
    fetchTotalProdutos();
  },[]);

  const validaProdutoExistente = async (vitrine) => {
    const Produto = vitrine.produtoID.map(prodId => api.get(`/products/${prodId}`));
    return await Promise.all(Produto).then(responses => {
      let produtoIdErro = [];
      for (let index = 0; index < responses.length; index++) {
        const response = responses[index];
        if (!response.data) {
          produtoIdErro.push(vitrine.produtoID[index])
        }
      }
      return produtoIdErro
    });
  };

  const validaCodeExistente = (vitrine) => {
    const listaVitrines = getVitrines()
    const listaFiltered = listaVitrines.filter((item) => item.code === vitrine.code)
    if (listaFiltered.length) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idsArray = produtoID.split(',').map(id => parseInt(id.trim()));
    const listaVitrine = getVitrines();
    const vitrineNova = { name, code, produtoID: idsArray };
    const produtoErro = await validaProdutoExistente(vitrineNova);
    if (produtoErro.length) {
      alert(`ID de produto inexistente: ${produtoErro.join()}`)
      return;
    }
    if (codeVitrine) {
      updateVitrine(vitrineNova);
      navigate(`/vitrine/${codeVitrine}`);
    } else {
      const invalidCode = validaCodeExistente(vitrineNova)
      if (invalidCode) {
        alert('Codigo de vitrine já existe')
        return;
      }
      listaVitrine.push(vitrineNova);
      setVitrines(listaVitrine);
      navigate('/vitrines');
    }
  };

  return (
    <form className='formulario-grupo' onSubmit={handleSubmit}>
      <div className='formulario-input'>
        <label className='formulario-label'>Titulo:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className='formulario-input'>
        <label>Código:</label>
        <input className='formulario-input' type="text" value={code} disabled={codeVitrine} onChange={e => setCode(e.target.value)} required />
      </div>
      <div className='formulario-input'>
        <label>ID de Produto(separado por virgula):</label>
        <input type="text" value={produtoID} onChange={e => setProdutoID(e.target.value)} required />
        <label className='total-produto'>Quantidade de produtos: {totalProdutos}</label>
      </div>
      <button className='formulario-button' type='submit'>Salvar</button>
    </form>
  )
}

export default FormularioVitrine;

