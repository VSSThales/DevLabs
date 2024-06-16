import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVitrines } from "../helpers/VitrineHelpers";

const ListaVitrine = () => {
  const [ListaVitrine, setListaVitrine] = useState([]);

  useEffect(() => {
    setListaVitrine(getVitrines());
  }, []);

  return (
    <div>
      <h2>Vitrines Cadastradas</h2>
      <ul>
        {ListaVitrine.map((vitrine) => (
          <li key={vitrine.code}>
            <Link to={`/vitrine/${vitrine.code}`}>{vitrine.name}</Link>
            {/* <Link to={`/vitrine/edit/${vitrine.code}`}>Editar</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVitrine;