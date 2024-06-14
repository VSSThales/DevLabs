import { Link } from "react-router-dom";

const ListaVitrine = ({ ListaVitrine }) => {
  return (
    <div>
      <h2>Vitrine Cadastradas</h2>
      <ul>
        {ListaVitrine.map((ListaVitrine, index) => (
          <li key={index}>
            <Link to={`/ListaVitrine/${index}`}>{ListaVitrine.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVitrine;