  
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import { async } from "@firebase/util";


const EditarClient = () => {
  
  const [primer_nombre, setPrimer_nombre] = useState("");
   const [segundo_nombre, setSegundo_nombre] = useState("");
   const [primer_apellido, setPrimer_apellido] = useState("");
   const [segundo_apellido, setSegundo_apellido] = useState("");
   const [direccion, setDireccion] = useState("");
   const [telefono, setTelefono] = useState("");
   const navigate = useNavigate();
   const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const admin = doc(dataBase, "Admin-clientes", id);
    const data = {
      primer_nombre: primer_nombre,
         segundo_nombre: segundo_nombre,
         primer_apellido: primer_apellido,
         segundo_apellido: segundo_apellido,
         direccion: direccion,
         telefono: telefono,
    };
     
      await updateDoc(admin, data);
      navigate("/clientes");
    
  };

  const tenerDatosId = async (id) => {
    const dataClient = await getDoc(doc(dataBase, "Admin-clientes", id));
    if (dataClient.exists()) {
      setPrimer_nombre(dataClient.data().primer_nombre);
      setSegundo_nombre(dataClient.data().segundo_nombre);
      setPrimer_apellido(dataClient.data().primer_apellido);
      setSegundo_apellido(dataClient.data().segundo_apellido);
      setDireccion(dataClient.data().direccion);
      setTelefono(dataClient.data().telefono);
    } else {
    }
  };

  useEffect(() => {
    tenerDatosId(id);
  }, []);
  return (
   /*  Estructura de la tabla */
   <section>
   <div className="divFondo "></div>
   <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] m-auto p-5 text-center text-stone-300 uppercase">
     Editar consulta de clientes
   </h1>
   <section className="celulares-container md:mx-0 mx-10">
     <section className="formCell p-5 ">
       <form id="form" className="w-full max-w-2xl  m-10 " onSubmit={update}>
         <div className="contenedorForm">
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Primer Nombre
           </label>
           <input
             name="primer_nombre"
             id="primer_nombre"
             value={primer_nombre}
             onChange={(e)=>setPrimer_nombre(e.target.value)}
             type="text"
             className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
           />
           <i id="check" className="fa-solid fa-check"></i>
           <i
             id="exclamation"
             className="fa-solid fa-circle-exclamation"
           ></i>
           <div id="marca-alert" className="exclamation-alert">
             <p>Solo se permiten letras.</p>
           </div>
         </div>

         <div className="contenedorForm">
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Segundo Nombre
           </label>
           <input
             name="segundo_nombre"
             id="segundo_nombre"
             value={segundo_nombre}
             onChange={(e)=>setSegundo_nombre(e.target.value)}
             type="text"
             className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
           />
           <i id="checkR" className="fa-solid fa-check"></i>
           <i
             id="exclamationR"
             className="fa-solid fa-circle-exclamation"
           ></i>
           <div id="referencia-alert" className="exclamation-alert">
             <p>Solo se permiten letras y números.</p>
           </div>
         </div>

         <div className="contenedorForm">
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Primer apellido
           </label>
           <input
             name="primer_apellido"
             id="primer_apellido"
             value={primer_apellido}
             onChange={(e)=>setPrimer_apellido(e.target.value)}
             type="text"
             className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
           />
           <i id="checkP" className="fa-solid fa-check"></i>
           <i
             id="exclamationP"
             className="fa-solid fa-circle-exclamation"
           ></i>
           <div id="precio-alert" className="exclamation-alert">
             <p>Solo se permiten números.</p>
           </div>
         </div>

         <div className="contenedorForm">
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Segundo Apellido
           </label>
           <input
             name="segundo_apellido"
             id="segundo_apellido"
             value={segundo_apellido}
             onChange={(e)=>setSegundo_apellido(e.target.value)}
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
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Direccion
           </label>
           <input
             name="direccion"
             id="direccion"
             value={direccion}
             onChange={(e)=>setDireccion(e.target.value)}
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
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Telefono
           </label>
           <input
             name="telefono"
             id="telefono"
             value={telefono}
             onChange={(e)=>setTelefono(e.target.value)}
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
         <div className="cel-but">
              <button type="submit" className="btnAgregar">
                Actualizar
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
  


export default EditarClient