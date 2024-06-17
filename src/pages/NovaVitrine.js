import { Link } from "react-router-dom";
import FormularioVitrine from "../components/FormularioVitrine";
import "../styles/FormularioVitrine.css"

const NovaVitrine = ({ onSave }) => {
  return (
    <div className="formulario-container">
      <h2 className="formulario-titulo">Criar nova vitrine</h2>
      <FormularioVitrine onSave={onSave} />
      <Link to={'/vitrines/'}><button className="voltar-button">Voltar</button></Link>
    </div>
  );
};

export default NovaVitrine;