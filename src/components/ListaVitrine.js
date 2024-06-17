import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVitrines } from "../helpers/VitrineHelpers";
import '../styles/ListaVitrine.css'

const ListaVitrine = () => {
  const [ListaVitrine, setListaVitrine] = useState([]);

  useEffect(() => {
    setListaVitrine(getVitrines());
  }, []);

  return (
    <div className="lista-container">
      <h2 className="lista-titulo">Vitrines Cadastradas</h2>
      <ul className="vitrine-lista">
        {ListaVitrine.map((vitrine) => (
          <li className="vitrine-item" key={vitrine.code}>
            <Link className="vitrine-link" to={`/vitrine/${vitrine.code}`}>{vitrine.code} - {vitrine.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/nova-vitrine"><button className="button-lista">Nova Vitrine</button></Link>
    </div>
  );
};

export default ListaVitrine;