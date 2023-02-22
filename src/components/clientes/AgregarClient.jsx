import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";


const AgregarClient = () => {

   //  Add cel
   const [primer_nombre, setPrimer_nombre] = useState("");
   const [segundo_nombre, setSegundo_nombre] = useState("");
   const [primer_apellido, setPrimer_apellido] = useState("");
   const [segundo_apellido, setSegundo_apellido] = useState("");
   const [direccion, setDireccion] = useState("");
   const [telefono, setTelefono] = useState("");

   const navigate = useNavigate();
 
   const clientcard = collection(dataBase, "Admin-clientes");
 
   const addclient = async (e) => {
     
       e.preventDefault();
       await addDoc(clientcard, {
         primer_nombre: primer_nombre,
         segundo_nombre: segundo_nombre,
         primer_apellido: primer_apellido,
         segundo_apellido: segundo_apellido,
         direccion: direccion,
         telefono: telefono,
       });
       navigate("/clientes");
     }
   
  return (
    /*  Estructura de la tabla */
    <section className="contenedor-principal">
      <div className="divFondo "></div>
      <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] m-auto p-5 text-center text-stone-300 uppercase">
        Agregar Clientes
      </h1>
      <section className=" celulares-container md:mx-0 mx-10 ">
        <section className="formCell p-5  ">
          <form id="form" className="w-full max-w-2xl  m-10 "onSubmit={addclient}>
            <div className="contenedorForm ">
              <label className="text-gray-300 block uppercase font-bold mb-2 ">
                Primer Nombre
              </label>
              <input
                name="primer_nombre"
                id="primer_nombre"
                value={primer_nombre}
                onChange={(e) => setPrimer_nombre(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="check" class="fa-solid fa-check"></i>
              <i id="exclamation" class="fa-solid fa-circle-exclamation"></i>
              <div id="marca-alert" className="exclamation-alert">
                <p>Solo se permiten letras.</p>
              </div>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Segundo Nombre
              </label>
              <input
                name="segundo_nombre"
                id="segundo_nombre"
                value={segundo_nombre}
                onChange={(e) => setSegundo_nombre(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkR" class="fa-solid fa-check"></i>
              <i id="exclamationR" class="fa-solid fa-circle-exclamation"></i>
              <div id="referencia-alert" className="exclamation-alert">
                <p>Solo se permiten letras y números.</p>
              </div>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Primer Apellido
              </label>
              <input
                name="primer_apellido"
                id="primer_apellido"
                value={primer_apellido}
                onChange={(e) => setPrimer_apellido(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkP" class="fa-solid fa-check"></i>
              <i id="exclamationP" class="fa-solid fa-circle-exclamation"></i>
              <div id="precio-alert" className="exclamation-alert">
                <p>Solo se permiten números.</p>
              </div>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Segundo Apellido:
              </label>
              <input
                name="segundo_apellido"
                id="segundo_apellido"
                value={segundo_apellido}
                onChange={(e) => setSegundo_apellido(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkC" className="fa-solid fa-check"></i>
              <i
                id="exclamationC"
                className="fa-solid fa-circle-exclamation"
              ></i>
              <div id="carac-alert" className="exclamation-alert">
                <p>Solo se permiten letras y números.</p>
              </div>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Direccion
              </label>
              <input
                name="direccion"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkI" className="fa-solid fa-check"></i>
              <i
                id="exclamationI"
                className="fa-solid fa-circle-exclamation"
              ></i>
              <div id="imagen-alert" className="exclamation-alert">
                <p>Solo se permiten urls.</p>
              </div>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Telefono
              </label>
              <input
                name="telefono"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkI" className="fa-solid fa-check"></i>
              <i
                id="exclamationI"
                className="fa-solid fa-circle-exclamation"
              ></i>
              <div id="imagen-alert" className="exclamation-alert">
                <p>Solo se permiten urls.</p>
              </div>
            </div>

            {/* BOTON AGREGAR */}
            <p id="submit-alert"></p>
            <div className="cel-but">
              <button type="submit" className="btnAgregar">
                Agregar
              </button>
              <Link className="cel-cancel" to="/clientes">
                Cancelar
              </Link>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

  


export default AgregarClient