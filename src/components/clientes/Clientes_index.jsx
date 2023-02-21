import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./clientess.css"
import Header from "../../helper/Header";
import icon_cliente from "../../assets/icon_cliente.png"

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
      <Header />
      <div className="divFondo "></div>
      <section className="celulares-container md:mx-0 mx-10">
        {/* Datos de la tabla */}
        <section className="listado-celulares ">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="cel-card">
              <div className="cel-subcont">
                {/* OTRA FORMA DE MOSTRAR LAS CARDS */}

                <div class="wrapper targeta_client"> {/*inicio targeta */}
                  <div class="overviewInfo">
                    <div class="productinfo">

                      <img src={icon_cliente} alt="" />
              
                      <div className="targeta_cont">
                        <div className="targeta_cont_items">
                          <div class="grouptext">
                            <h3>Cliente</h3>
                            <p>{cliente.primer_nombre} {cliente.segundo_nombre}</p>
                            <p>{cliente.primer_apellido} {cliente.segundo_apellido}</p>
                          </div>
                          <div class="grouptext">
                             <h3>Direccion</h3>
                          <p>{cliente.direccion}</p>
                          </div>
                          <div className="grouptext">
                            <h3>Telefono</h3>
                             <p>{cliente.telefono}</p>
                          </div>
                             
                        </div>

                      </div>
                        

                      <div className="acciones_clie">
                        <div class="checkoutButton ojo"> {/* ↓ acciones ↓ */}
                          <div class="priceTag">
                            <span>
                              <button onClick={() => confirEliminar(cliente.id)}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </span>
                          </div>
                          <h2>Eliminar</h2>
                        </div> {/* ↑ acciones ↑ */}
                      
                        
                          <div class="checkoutButton ojo"> {/* ↓ acciones ↓ */}
                            <div>
                              <Link
                                to={`/edit-client/${cliente.id}`}
                                className="fa-solid fa-pen-to-square "
                              ></Link>
                            </div>
                            <h2>Editar</h2>
                          </div> {/* ↑ acciones ↑ */}
                      </div>
                      
                        
                     
                      
                    </div>
                  </div>

                </div> {/* fin targeta */}
              </div>
            </div>
          ))}
        </section>
      </section>
      <Link to="/add-client" className="add-cel ml-40 bg-red-600">
        <i class="fa-solid fa-plus"></i><h1>Agregar nuevo cliente</h1>
      </Link>
    </section>
  );
};

export default Clientes_index;
