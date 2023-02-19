import React from "react";
import logo from '../assets/logo1.png'

const Header = () => {
  return (
    <section className="container-header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <section>
        <div className="menu">
          <ul>
            <a href=""><li>Inicio</li></a>
            <a href=""><li>Clientes</li></a>
            <a href=""><li>Accesorios</li></a>
            <a href=""><li>Celulares</li></a>
            <a className="sesion" href=""><li>Inicio sesión</li></a>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Header;
