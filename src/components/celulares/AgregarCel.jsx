/* Se importan componentes */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";

/* Comienzo de funciones */

const AgregarCel = () => {
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const celCard = collection(dataBase, "Admin-celulares");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(celCard, {
      marca: marca,
      referencia: referencia,
      precio: precio,
      caracteristicas: caracteristicas,
      imagen: imagen,
    });
    navigate("/celulares");
  };

  return (
    /*  Estructura de la tabla */
    <section className="divFondo min-h-[100vh] ">
      <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] m-auto p-5 text-center text-stone-300 uppercase">
        Agregar Celulares
      </h1>
      <section className=" celulares-container md:mx-0 mx-10 ">
        <section className="formCell p-5  ">
          <form className="w-full max-w-2xl  m-10 " onSubmit={store}>
            <div className="contenedorForm ">
              <label className="text-gray-300 block uppercase font-bold mb-2 ">
                Marca:
              </label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Referencia:
              </label>
              <input
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Precio:
              </label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Caracteristicas:
              </label>
              <textarea
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
                type="text"
                className="form-control appearance-none block  bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              ></textarea>
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">
                Imagen:
              </label>
              <input
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                type="file"
                className="form-control appearance-none block  bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
            </div>
            {/* BOTON AGREGAR */}
            <button type="submit" className="btnAgregar bg-red-500 m-20">
              Agregar
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default AgregarCel;
