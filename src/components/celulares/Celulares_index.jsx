/* Se importan componentes */
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
///Componentes de alerta
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Celulares_index = () => {
  const [celulares, setCelulares] = useState([]);
  const celCard = collection(dataBase, "Admin-celulares");

  const listarCelulares = async () => {
    const datos = await getDocs(celCard);
    console.log(datos);
    setCelulares(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(celulares);
  };
  /// Funcion para eliminar datos
  const eliminarCelular = async (id) => {
    const celDelete = doc(dataBase, "Admin-celulares", id);
    await deleteDoc(celDelete);
    listarCelulares();
  };
  /*  funcion  del modal de eliminar */
  const confirEliminar = (id) => {
    Swal.fire({
      title: "Esta seguro que quieres Eliminar?",
      text: "Si eliminas esto, no tendrá reversa!",
      icon: "Peligro!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar, this shit!",
    }).then((result) => {
      if (result.isConfirmed) {
        /*  LLamado a la accion  */
        eliminarCelular(id);
        Swal.fire("Eliminado!", "Tu elección a sido eliminada", "Exito!😎");
      }
    });
  };

  useEffect(() => {
    listarCelulares();
  }, []);

  return (
    <section className="container">
      <section className="celulares-container">
        <Link to="/add-cel">Agregar celular</Link>

        {/* Datos de la tabla */}
        <section className="listado-celulares">
          {celulares.map((celular) => (
            <div key={celular.id} className="cel-card">
              <img src={`${celular.imagen}`} alt="card-img" />
              <div className="cel-subcont">
                <div className="cel-info">
                  <span>
                    <h2>Marca:</h2>
                    <p>{celular.marca}</p>
                  </span>
                  <span>
                    <h2>Referencia:</h2>
                    <p>{celular.referencia}</p>
                  </span>
                  <span>
                    <h2>Precio:</h2>
                    <p>{celular.precio}</p>
                  </span>
                  <span>
                    <h2>Caracteristicas:</h2>
                    <p>{celular.caracteristicas}</p>
                  </span>
                </div>

                {/* Boton acciones */}
                <div className="acciones">
                  <button onClick={() => confirEliminar(celular.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  <Link
                    to={`/edit-cel/${celular.id}`}
                    className="fa-solid fa-pen-to-square"
                  ></Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Celulares_index;
