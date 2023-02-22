/* Se importan componentes */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import { Link } from "react-router-dom";

/* Comienzo de funciones */

const AgregarCel = () => {
  // Validacion

  const input = document.querySelectorAll("#form input");
  const textarea = document.querySelectorAll("#form textarea");
  const submitAlert = document.getElementById("submit-alert");
  const vMarca = document.getElementById("marca");
  const vReferencia = document.getElementById("referencia");
  const vPrecio = document.getElementById("precio");
  const vCaracteristicas = document.getElementById("caracteristicas");
  const vImagen = document.getElementById("imagen");
  const marcaA = document.getElementById("marca-alert");
  const referenciaA = document.getElementById("referencia-alert");
  const precioA = document.getElementById("precio-alert");
  const caracteristicasA = document.getElementById("carac-alert");
  const imagenA = document.getElementById("imagen-alert");
  const check = document.getElementById("check");
  const exclamation = document.getElementById("exclamation");
  const checkR = document.getElementById("checkR");
  const exclamationR = document.getElementById("exclamationR");
  const checkP = document.getElementById("checkP");
  const exclamationP = document.getElementById("exclamationP");
  const checkC = document.getElementById("checkC");
  const exclamationC = document.getElementById("exclamationC");
  const checkI = document.getElementById("checkI");
  const exclamationI = document.getElementById("exclamationI");

  const vLetras = /^[A-Za-z]{1,20}$/;
  const vLetrasyNum = /^[a-zA-Z0-9]{1,20}$/;
  const vNumeros = /[^a-z ]\ *([.0-9])*\d/;
  const vUrl =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

  const valForm = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "marca":
        if (vLetras.test(e.target.value)) {
          check.style.opacity = "1";
          exclamation.style.opacity = "0";
          marcaA.style.opacity = "0";
          submitAlert.textContent = "";
        } else {
          exclamation.style.opacity = "1";
          check.style.opacity = "0";
          marcaA.style.opacity = "1";
          submitAlert.textContent = "Rellene los campos correctamente.";
        }
        break;
      case "referencia":
        if (vLetrasyNum.test(e.target.value)) {
          checkR.style.opacity = "1";
          exclamationR.style.opacity = "0";
          referenciaA.style.opacity = "0";
          submitAlert.textContent = "";
        } else {
          exclamationR.style.opacity = "1";
          checkR.style.opacity = "0";
          referenciaA.style.opacity = "1";
          submitAlert.textContent = "Rellene los campos correctamente.";
        }
        break;
      case "precio":
        if (vNumeros.test(e.target.value)) {
          checkP.style.opacity = "1";
          exclamationP.style.opacity = "0";
          precioA.style.opacity = "0";
          submitAlert.textContent = "";
        } else {
          exclamationP.style.opacity = "1";
          checkP.style.opacity = "0";
          precioA.style.opacity = "1";
          submitAlert.textContent = "Rellene los campos correctamente.";
        }
        break;
      case "caracteristicas":
        if (vLetrasyNum.test(e.target.value)) {
          checkC.style.opacity = "1";
          exclamationC.style.opacity = "0";
          caracteristicasA.style.opacity = "0";
          submitAlert.textContent = "";
        } else {
          exclamationC.style.opacity = "1";
          checkC.style.opacity = "0";
          caracteristicasA.style.opacity = "1";
          submitAlert.textContent = "Rellene los campos correctamente.";
        }
        break;
      case "imagen":
        if (vUrl.test(e.target.value)) {
          checkI.style.opacity = "1";
          exclamationI.style.opacity = "0";
          imagenA.style.opacity = "0";
          submitAlert.textContent = "";
        } else {
          exclamationI.style.opacity = "1";
          checkI.style.opacity = "0";
          imagenA.style.opacity = "1";
          submitAlert.textContent = "Rellene los campos correctamente.";
        }
        break;
    }
  };

  input.forEach((input) => {
    input.addEventListener("keyup", valForm);
    input.addEventListener("blur", valForm);
  });
  textarea.forEach((textarea) => {
    textarea.addEventListener("keyup", valForm);
    textarea.addEventListener("blur", valForm);
  });
  //  Add cel
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const celCard = collection(dataBase, "Admin-celulares");

  const store = async (e) => {
    if (
      !vLetras.test(vMarca.value) ||
      !vLetrasyNum.test(vReferencia.value) ||
      !vLetrasyNum.test(vCaracteristicas.value) ||
      !vNumeros.test(vPrecio.value) ||
      !vUrl.test(vImagen.value)
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      await addDoc(celCard, {
        marca: marca,
        referencia: referencia,
        precio: precio,
        caracteristicas: caracteristicas,
        imagen: imagen,
      });
      navigate("/celulares");
    }
  };

  return (
    /*  Estructura de la tabla */
    <section className="contenedor-principal">
      <div className="divFondo "></div>
      <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] m-auto p-5 text-center text-stone-300 uppercase">
        Agregar Celulares
      </h1>
      <section className=" celulares-container md:mx-0 mx-10 ">
        <section className="formCell p-5  ">
          <form id="form" className="w-full max-w-2xl  m-10 " onSubmit={store}>
            <div className="contenedorForm ">
              <label className="text-gray-300 block uppercase font-bold mb-2 ">
                Marca:
              </label>
              <input
                name="marca"
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
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
                Referencia:
              </label>
              <input
                name="referencia"
                id="referencia"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
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
                Precio:
              </label>
              <input
                name="precio"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
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
                Caracteristicas:
              </label>
              <textarea
                name="caracteristicas"
                id="caracteristicas"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              ></textarea>
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
                Imagen:
              </label>
              <input
                name="imagen"
                id="imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
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
              <Link className="cel-cancel" to="/celulares">
                Cancelar
              </Link>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default AgregarCel;
