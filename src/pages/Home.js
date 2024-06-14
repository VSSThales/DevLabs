import ListaVitrine from "../components/ListaVitrine";

const Home = ({ vitrines }) => {
  return (
    <div>
      <h1>Bem Vindo à Vitrine Virtual</h1>
      <ListaVitrine vitrines={vitrines} />
    </div>
  );
};

export default Home;