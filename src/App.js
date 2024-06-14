import { useState } from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NovaVitrine from './pages/NovaVitrine';
import Vitrine from './pages/Vitrine';
import NavBar from "./components/NavBar";

const App = () => {
  const [vitrines, setVitrines] = useState([]);

  const handleSaveVitrine = (vitrine) => {
    setVitrines([...vitrines, vitrine]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="nova-vitrine" element={<NovaVitrine onSave={handleSaveVitrine}/>}/>
        <Route path="Vitrines" element={<Vitrine vitrines={vitrines}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
