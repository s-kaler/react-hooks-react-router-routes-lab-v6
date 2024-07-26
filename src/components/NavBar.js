import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/actors"
        className="nav-link"
      >
        Actors
      </NavLink>

      <NavLink
        to="/directors"
        className="nav-link"
      >
        Directors
      </NavLink>
      
    </nav>
    );
};

export default NavBar;
