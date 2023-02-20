/* Se importan componentes */
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import Header from "../../helper/Header";
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
    <section className="contenedor-principal">
      <Header />
      <div className="divFondo "></div>
      <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] p-5 mt-10 text-center text-stone-300 uppercase -mb-20">
        Celulares disponibles
      </h1>

      <section className="celulares-container md:mx-0 mx-10 ">
        {/* Datos de la tabla */}
        <section className="listado-celulares ">
          {celulares.map((celular) => (
            <div key={celular.id} className="cel-card">
              <div className="cel-subcont">
                {/*LAS CARDS */}

                <div className="wrapper">
                  <div className="overviewInfo">
                    <div className="actions">
                      <div className="backbutton ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </div>
                      <div className="cartbutton neurobutton">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                            fill="currentColor"
                          />
                          <path
                            d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="productinfo">
                      <div className="grouptext">
                        <h3>MARCA:</h3>
                        <p>{celular.marca}</p>
                      </div>
                      <div className="grouptext">
                        <h3>REFERENCIA:</h3>
                        <p>{celular.referencia}</p>
                      </div>
                      <div className="grouptext">
                        <h3>PRECIO:</h3>
                        <p>{celular.precio}</p>
                      </div>
                    </div>
                  </div>

                  <div className="productImage">
                    <img
                      src={`${celular.imagen}`}
                      alt="Telefono"
                      className="ImgMovimiento"
                    />
                  </div>

                  <div className="productSpecifications">
                    <h1 className="TitleCard">Caracteristicas</h1>
                    <p className="scroll-caracteristicas">{celular.caracteristicas}</p>

                    <div className="checkoutButton">
                      <div className="priceTag">
                        <span>
                          <button onClick={() => confirEliminar(celular.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </span>
                      </div>
                      <div>
                        <Link
                          to={`/edit-cel/${celular.id}`}
                          className="fa-solid fa-pen-to-square "
                        ></Link>
                      </div>
                      <button className="preorder">
                        <p>Ordenar</p>
                        <div className="buttonaction">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
      <Link to="/add-cel " className="add-cel ml-40 bg-red-600">
        <i class="fa-solid fa-plus"></i> <h1>Agregar nuevo celular</h1>
      </Link>
    </section>
  );
};

export default Celulares_index;
