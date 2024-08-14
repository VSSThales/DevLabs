import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NovaVitrine from './pages/NovaVitrine';
import Vitrine from './pages/Vitrine';
import NavBar from "./components/NavBar";
import DetalheVitrine from "./pages/DetalheVitrine";

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="nova-vitrine" element={<NovaVitrine/>}/>
        <Route path="vitrines" element={<Vitrine/>}/>
        <Route path="vitrine/:code" element={<DetalheVitrine/>}/>
        <Route path="vitrine/edit/:codeVitrine" element={<NovaVitrine/>}/>
      </Routes>
    </Router>
  );
  console.log
};

export default App;
