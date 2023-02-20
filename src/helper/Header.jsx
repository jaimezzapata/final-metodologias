import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <section className="container-header">
      <div className="logo mt-5 -ml-[10%]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <section>
        <div className="menu">
          <ul>
            <NavLink to="/">
              <li>Inicio</li>
            </NavLink>
            <NavLink to="/clientes">
              <li>Clientes</li>
            </NavLink>
            <NavLink to="/accesorios">
              <li>Accesorios</li>
            </NavLink>
            <NavLink to="/celulares">
              <li>Celulares</li>
            </NavLink>
            <NavLink className="sesion" to="/login">
              <li>Inicio sesión</li>
            </NavLink>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Header;
