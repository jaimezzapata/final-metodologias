import React from "react";
import logo from "../assets/img-producto.png";
import Header from "../helper/Header";

const Home = () => {
  return (
    <section>
      <Header />
      <section className="main">
        <h4>El mejor contenido para tu smartphone.</h4>      
          <div className="container-p">  
          <p>
          <h1>Encuentra tu mejor estilo <br /> para tu smartphone.</h1>
            Somos una tienda en línea que ofrece una amplia variedad de
            dispositivos móviles de última generación, así como una gran
            selección de accesorios para personalizar y proteger tu dispositivo.{" "}
            <br />
            En nuestra tienda, ofrecemos una amplia selección de dispositivos
            móviles de última generación, desde teléfonos inteligentes hasta
            tabletas y wearables. Además, contamos con una gran variedad de
            accesorios, como fundas, protectores de pantalla, cargadores,
            auriculares y mucho más, para que puedas personalizar y proteger tu
            dispositivo. <br />
            Somos una empresa comprometida con la calidad y contamos con un
            equipo de expertos en tecnología que están disponibles para ayudarte
            en cada paso del proceso de compra, brindando asesoramiento y
            ofreciendo precios competitivos. La tienda se enfoca principalmente
            en brindar una experiencia excepcional al cliente, lo que les
            permite encontrar todo lo que necesitan para mejorar y personalizar
            su experiencia móvil.
          </p>
          <img className="img1" src={logo} alt="" />
          </div>

      </section>
      <div className="button">
        <input type="button" value="Contactanos" />
      </div>
    </section>
  );
};

export default Home;
