import { Link } from "react-router-dom";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        Bem-Vindo à Vitrine Virtual
      </h1>
      <label>Quer criar uma nova vitrine? Clique abaixo</label>
        <Link to="/nova-vitrine"><button className="button-home">Nova Vitrine</button></Link>
      <label>Quer verificar suas vitrines? Clique abaixo</label>
        <Link to="/vitrines"><button className="button-home">Vitrines</button></Link>
    </div>
  );
};

export default Home;