/*  import React from 'react'
import Header from '../../helper/Header'
import './style.css'

const Accesorios_index = () => {
  return (
    <section className='container'>
      <Header />
      
    </section>
  )
}

export default Accesorios_index*/
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

const Accesorios_index = () => {
  const [accesorios, setaccesorios] = useState([]);
  const accCard = collection(dataBase, "Admin-accesorios");

  const listaraccesorios = async () => {
    const datos = await getDocs(accCard);
    console.log(datos);
    setaccesorios(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(accesorios);
  };
  /// Funcion para eliminar datos
  const elimiminarAccesorios = async (id) => {
    const AccDelete = doc(dataBase, "Admin-accesorios", id);
    await deleteDoc(AccDelete);
    listaraccesorios();
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
        elimiminarAccesorios(id);
        Swal.fire("Eliminado!", "Tu elección a sido eliminada", "Exito!😎");
      }
    });
  };

  useEffect(() => {
    listaraccesorios();
  }, []);

  return (
    <section className="container">
      <section className="accesorios-container">
        <Link to="/add-acc">Agregar Nuevo Accesorio</Link>

        {/* Datos de la tabla */}
        <section className="listado-accesorios">
          {accesorios.map((accesorios) => (
            <div key={accesorios.id} className="cel-acc">
              <img src={`${accesorios.imagen}`} alt="card-img" />
              <div className="acc-subcont">
                {/*  <div className="cel-info">
                  <span>
                    <h2>Marca:</h2>
                    <p>{accesorios.marca}</p>
                  </span>
                  <span>
                    <h2>Referencia:</h2>
                    <p>{accesorios.referencia}</p>
                  </span>
                  <span>
                    <h2>Precio:</h2>
                    <p>{accesorios.precio}</p>
                  </span>
                  <span>
                    <h2>Caracteristicas:</h2>
                    <p>{accesorios.caracteristicas}</p>
                  </span>
                </div> */}

                {/* OTRA FORMA DE MOSTRAR LAS CARDS */}

                <div class="wrapper">
                  <div class="overviewInfo">
                    <div class="actions">
                      <div class="backbutton ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </div>
                      <div class="cartbutton neurobutton">
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

                    <div class="productinfo">
                      <div class="grouptext">
                        <h3>TIPO DE ACCESORIO:</h3>
                        <p>{accesorios.marca}</p>
                      </div>
                      <div class="grouptext">
                        <h3>CANTIDAD:</h3>
                        <p>{accesorios.referencia}</p>
                      </div>
                      <div class="grouptext">
                        <h3>VALOR:</h3>
                        <p>{accesorios.precio}</p>
                      </div>
                    </div>
                  </div>

                  <div class="productSpecifications">
                    <h1 className="TitleCard">CARACTERISTICAS</h1>
                    <p>{accesorios.caracteristicas}</p>

                    <div class="productFeatures">
                      <div class="feature">
                        <div class="featureIcon"></div>
                        <div class="featureText"></div>
                      </div>
                      <div class="feature">
                        <div class="featureIcon"></div>
                        <div class="featureText"></div>
                      </div>
                    </div>

                    <div class="checkoutButton">
                      <div class="priceTag">
                        <span>
                          <button onClick={() => confirEliminar(accesorios.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </span>
                      </div>
                      <div>
                        <Link
                          to={`/edit-cel/${accesorios.id}`}
                          className="fa-solid fa-pen-to-square"
                        ></Link>
                      </div>
                      <button class="preorder">
                        <p>Preorder</p>
                        <div class="buttonaction">
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

                {/* Boton acciones */}
                {/*    <div className="acciones">
                  <button onClick={() => confirEliminar(accesorios.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  <Link
                    to={`/edit-cel/${accesorios.id}`}
                    className="fa-solid fa-pen-to-square"
                  ></Link>
                </div> */}
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Accesorios_index;
