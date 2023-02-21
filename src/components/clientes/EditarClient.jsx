import React from 'react'  

const EditarClient = () => {
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
             onChange
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
             onChange
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
             onChange
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
           <textarea
             name="segundo_apellido"
             id="segundo_apellido"
             value={segundo_apellido}
             onChange
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
             onChange
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
         {/* boton actualizar */}
         <p id="submit-alert"></p>
         <div className="cel-but">
           <button type="submit" className="btnAgregar">
             Actualizar
           </button>
           <Link className="cel-cancel" to="/celulares">
             Cancelar
           </Link>
         </div>

         <div className="contenedorForm">
           <label className="text-gray-300 block uppercase font-bold mb-2 ">
             Telefono
           </label>
           <textarea
             name="telefono"
             id="telefono"
             value={telefono}
             onChange
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

       </form>
     </section>
   </section>
 </section>
);
};
  


export default EditarClient