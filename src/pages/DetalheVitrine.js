import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/FakeAPI";
import { deleteVitrine, getVitrineByCode } from "../helpers/VitrineHelpers";
import "../styles/DetalheVitrine.css"

const DetalheVitrine = () => {
  const { code } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [vitrine, setVitrine] = useState();

  useEffect(() => {
    const vitrineByCode = getVitrineByCode(code);
    if (vitrineByCode) {
      setVitrine(vitrineByCode);
    }
  }, [code]);

  useEffect(() => {
    if (vitrine) {
      const Produto = vitrine.produtoID.map(prodId => api.get(`/products/${prodId}`));
      Promise.all(Produto).then(responses => {
        setProdutos(responses.map(response => response.data));
      });
    }
  }, [vitrine]);

  if (!vitrine) {
    return <div>Vitrine não encontrada</div>
  }

  return (
    <div className="vitrine-detalhe">
      <h2 className="vitrine-titulo">Vitrine: {vitrine.name}</h2>
      <p className="vitrine-code">Código: {vitrine.code}</p>
      <h3 className="produto-titulo">Produtos:</h3>
      <div className="lista-produto">
        {produtos.map(produto => (
          <li className="produto-item" key={produto.id}>
            <p className="produto-categoria">{produto.category}</p>
            <p className="produto-titulo">{produto.title}</p>
            <img className="produto-imagem" src={produto.image} alt={produto.title} width="50" />
            <p className="produto-avaliacao"><strong>Rating:</strong> {produto.rating.rate} ({produto.rating.count} reviews)</p>
            <p className="produto-descricao">{produto.description}</p>
            <p className="produto-preco">R$ {produto.price}</p>
          </li>
        ))}
      </div>
      <Link to={`/vitrine/edit/${vitrine.code}`}><button className="edite-button">Editar Vitrine</button></Link>
      <Link to={'/vitrines/'}><button className="edite-button">Voltar</button></Link>
      <Link to={'/vitrines/'}><button className="delete-button" onClick={()=>deleteVitrine(vitrine.code)}>Deletar Vitrine</button></Link>
    </div >
  );
};

export default DetalheVitrine;