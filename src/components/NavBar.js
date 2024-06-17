import { Link } from "react-router-dom"
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-lista">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;