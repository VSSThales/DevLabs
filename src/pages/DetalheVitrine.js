import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/FakeAPI";
import { deleteVitrine, getVitrineByCode } from "../helpers/VitrineHelpers";

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
    <div>
      <h2>{vitrine.name}</h2>
      <p>Código: {vitrine.code}</p>
      <h3>Produtos:</h3>
      <div className="lista-produto">
        {produtos.map(produto => (
          <li key={produto.id}>
            <p>{produto.category}</p>
            <img src={produto.image} alt={produto.title} width="50" />
            <p>{produto.title}</p>
            <p>{produto.description}</p>
            <p><strong>Rating:</strong> {produto.rating.rate} ({produto.rating.count} reviews)</p>
            <p>{produto.price} BR</p>
          </li>
        ))}
      </div>
      <Link to={`/vitrine/edit/${vitrine.code}`}>Editar</Link>
      <button onClick={() => deleteVitrine(vitrine.code)}>Excluir</button>
    </div>
  );
};

export default DetalheVitrine;