/* Se importan componentes */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";

/* Comienzo de funciones */

const AgregarAcc = () => {
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const accCard = collection(dataBase, "Admin-accesorios");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(accCard, {
      marca: marca,
      referencia: referencia,
      precio: precio,
      caracteristicas: caracteristicas,
      imagen: imagen,
    });
    navigate("/accesorios");
  };

  return (
    /*  Estructura de la tabla */
    <section className="container">
      <section className="accesorios-container">
        <section className="listado-accesorios">
          <h1>AGREGAR NUEVO ACCESORIO</h1>

          <form onSubmit={store}>
            <div className="contenedorForm">
              <label className="form">TIPO ACCESORIO:</label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">CANTIDAD:</label>
              <input
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">VALOR:</label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">CARACTERISTICAS:</label>
              <input
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="form">Imagen:</label>
              <input
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
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

export default AgregarAcc;
