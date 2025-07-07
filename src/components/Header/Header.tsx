import "../../styles/components/_header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <div className="logoContainer">
        <picture>
          <img src="/logo.svg" alt="Logo" />
        </picture>
        <address className="address">
          606 Harbor BlvdWest <br /> Sacramento, CA 95691
        </address>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="#">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="#">Car Finder</NavLink>
        </li>
        <li>
          <NavLink to="#"> Apply Online</NavLink>
        </li>
        <li>
          <NavLink to="#">About Us</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
