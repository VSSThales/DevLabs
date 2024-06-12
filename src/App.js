import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Vitrine Virtual</h1>

      <div className="containerInput">
        <input type="text" placeholder="Produto"/>
        <button className="buttonSearch">
          <FiSearch size={25} color="#000"/>
        </button>        

      </div>

      
      <h2>
        Seleçao de produtos para você!
      </h2>

    </div>
  );
}

export default App;
