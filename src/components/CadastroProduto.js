import './styles.css';

const CadastroProduto = ({ produto }) => {
  return (
    <div className="CadastroProduto">
      <img src={produto.image} alt={produto.title} className="imagem-produto" />
      <div className="detalhe-produto">
        <h3>{produto.title}</h3>
        <p>{produto.descricao}</p>
        <p><strong>Preço:</strong> ${produto.price}</p>
        <p><strong>Avaliação:</strong> ${produto.rating.rate}</p>
      </div>
    </div>
  );
};

export default CadastroProduto;
