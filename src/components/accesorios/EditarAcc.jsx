/* Se importan componentes */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import { async } from "@firebase/util";

/* Creacion de funciones */

const EditarAcc = () => {
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const admin = doc(dataBase, "Admin-accesorios", id);
    const data = {
      marca: marca,
      referencia: referencia,
      precio: precio,
      caracteristicas: caracteristicas,
      imagen: imagen,
    };
    await updateDoc(admin, data);
    navigate("/accesorios");
  };

  const tenerDatosId = async (id) => {
    const dataCell = await getDoc(doc(dataBase, "Admin-accesorios", id));
    if (dataCell.exists()) {
      setMarca(dataCell.data().marca);
      setReferencia(dataCell.data().referencia);
      setPrecio(dataCell.data().precio);
      setCaracteristicas(dataCell.data().caracteristicas);
      setImagen(dataCell.data(), imagen);
    } else {
    }
  };

  useEffect(() => {
    tenerDatosId(id);
  }, []);

  return (
    /*  Estructura de la tabla */
    <section className="container">
      <div className="divFondo "></div>
      <section className="accesorios-container">
        <section className="listado-accesorios">
          <h1>EDITAR CONSULTA DE ACCESORIO</h1>

          <form onSubmit={update}>
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
              <label className="form">Caracteristicas:</label>
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
            {/* boton actualizar */}
            <button type="submit" className="btnAgregar">
              Actualizar
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default EditarAcc;
