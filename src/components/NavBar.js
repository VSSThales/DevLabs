import { Link } from "react-router-dom"
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-lista">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/nova-vitrine" className="nav-link">Nova Vitrine</Link>
        </li>
        <li className="nav-item">
          <Link to="/vitrines" className="nav-link">Vitrines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;