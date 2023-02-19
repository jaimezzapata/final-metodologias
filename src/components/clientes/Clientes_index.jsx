import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// ontener informacion de la base de datos y la tabla
const Clientes_index = () => {
  const [clientes, setClientes] = useState([]);
  const clientCard = collection(dataBase, "Admin-clientes");

  const listarClientes = async () => {
    const datos = await getDocs(clientCard);
    console.log(datos);
    setClientes(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(clientes);
  };

  /// Funcion para eliminar datos
  const eliminarCliente = async (id) => {
    const clientDelete = doc(dataBase, "Admin-clientes", id);
    await deleteDoc(clientDelete);
    listarClientes();
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
        eliminarCliente(id);
        Swal.fire("Eliminado!", "Tu elección a sido eliminada", "Exito!😎");
      }
    });
  };

  useEffect(() => {
    listarClientes();
  }, []);

  return (
    <section>
      <div className="divFondo "></div>
      <section className="celulares-container md:mx-0 mx-10">
        {/* Datos de la tabla */}
        <section className="listado-celulares ">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="cel-card">
              <div className="cel-subcont">
                {/* OTRA FORMA DE MOSTRAR LAS CARDS */}

                {/*inicio targeta */}
                <div class="wrapper">
                  <div class="overviewInfo">
                    <div class="productinfo">
                      <div class="grouptext">
                        <h3>Primer nombre:</h3>
                        <p>{cliente.primer_nombre}</p>
                      </div>
                      <div class="grouptext">
                        <h3>Segundo nombre:</h3>
                        <p>{cliente.segundo_nombre}</p>
                      </div>
                      <div class="grouptext">
                        <h3>Primer apellido:</h3>
                        <p>{cliente.primer_apellido}</p>
                      </div>

                      <div class="grouptext">
                        <h3>Segundo apellido:</h3>
                        <p>{cliente.segundo_apellido}</p>
                      </div>
                      <div class="grouptext">
                        <h3>Telefono</h3>
                        <p>{cliente.telefono}</p>
                      </div>
                      <div class="grouptext">
                        <h3>Direccion</h3>
                        <p>{cliente.direccion}</p>
                      </div>


                      <div class="productSpecifications">
                      <h1 className="TitleCard">Caracteristicas</h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolores deserunt obcaecati fuga voluptatem vero odio magni molestiae quis perspiciatis cumque, nobis unde repudiandae itaque! Tenetur est asperiores nostrum molestias!
                      


                      {/* ↓ parte inferior targeta ↓ */}
                      <div class="checkoutButton">
                      <div class="priceTag">
                        <span>
                          <button onClick={() => confirEliminar(cliente.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </span>
                      </div>

                      <div>
                        <Link
                          to={`/edit-cel/${cliente.id}`}
                          className="fa-solid fa-pen-to-square "
                        ></Link>
                      </div>
                      
                      </div>
                      {/* ↑ parte inferior targeta ↑ */}
                      </div>
                    </div>

                    
                  </div>
                  {/* fin targeta */}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Clientes_index;
