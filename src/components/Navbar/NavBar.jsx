import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "../Cart/CartWidget";
import logo from "../../img/logo.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link to="/">
            <img
              src={logo}
              width="55"
              height="50"
              className="d-inline-block mx-2"
              alt="Logo"
            />
          </Link>
          <div className="collapse navbar-collapse" id="mynavbar">
            <div className="navbar-nav me-auto">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
              <Link to="/Cuenta" className="nav-link">
                Cuenta
              </Link>
              <div className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categorias
                </Link>
                <nav className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/category/hoodies">
                    Hoodies
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/remeras">
                    Remeras
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/medias">
                    Medias
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/accesorios">
                    Accesorios
                  </NavLink>
                </nav>
              </div>
              <NavLink to="/Cart" className="nav-link">
                <CartWidget />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
