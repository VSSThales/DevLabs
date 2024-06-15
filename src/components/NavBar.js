import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nova-vitrine">Nova Vitrine</Link></li>
        <li><Link to="/vitrines">Vitrines</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;