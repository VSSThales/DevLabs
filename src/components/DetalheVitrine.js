import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../services/FakeAPI";
import './styles.css'

const DetalheVitrine = ({ vitrines }) => {
  const { id } = useParams();
  const vitrine = vitrines[id];
  const [produtos, setProdutos] = useState([]);

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
    <div>
      <h2>{vitrine.name}</h2>
      <p>Código: {vitrine.code}</p>
        <h3>Produtos:</h3>
        <div className="lista-produto">
          {produtos.map(produto => (
            <li key={produto.id}>
              <img src={produto.image} alt={produto.title} width="50" />
              <p>{produto.title}</p>
              <p>{produto.price} BR</p>
            </li>
          ))};
        </div>
    </div>
  );
};

export default DetalheVitrine;