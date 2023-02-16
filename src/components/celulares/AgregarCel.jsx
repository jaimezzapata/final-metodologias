/* Se importan componentes */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";

/* Comienzo de funciones */

const AgregarCel = () => {
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const navigate = useNavigate();

  const celCard = collection(dataBase, "Admin-celulares");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(celCard, {
      marca: marca,
      referencia: referencia,
      precio: precio,
      caracteristicas: caracteristicas,
    });
    navigate("/celulares");
  };

  return (
    /*  Estructura de la tabla */
    <section className="container">
      <section className="celulares-container">
        <section className="listado-celulares">
          <h1>Agregar Celulares</h1>

          <form onSubmit={store}>
            <div className="contenedorForm">
              <label className="form">Marca:</label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">Referencia:</label>
              <input
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">Precio:</label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">Caracteristicas:</label>
              <input
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            {/* BOTON AGREGAR */}
            <button type="submit" className="btnAgregar">
              Agregar
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default AgregarCel;
