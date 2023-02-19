import { Link } from "react-router-dom";
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
        eliminarCelular(id);
        Swal.fire("Eliminado!", "Tu elección a sido eliminada", "Exito!😎");
      }
    });
  };

  useEffect(() => {
    listarClientes();
  }, []);




const Clientes_index = () => {
  return (
    <section className="divFondo min-h-[100vh] ">
      <section className="celulares-container md:mx-0 mx-10">
        {/* Datos de la tabla */}
        <section className="listado-celulares ">
        {clientes.map((cliente) => (
            <div key={cliente.id} className="cel-card">
              <div className="cel-subcont">
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
                        <h3>direccion:</h3>
                        <p>{cliente.direccion}</p>
                      </div>
                      <div class="grouptext">
                        <h3>telefono:</h3>
                        <p>{cliente.telefono}</p>
                      </div>
                      <div class="grouptext">
                        <h3>PRECIO:</h3>
                        <p>{cliente.precio}</p>
                      </div>
                    </div>
                  </div>

                  <div class="productImage">
                    <img src={`${cliente.imagen}`} alt="Telefono" />
                  </div>

                  <div class="productSpecifications">
                    <h1 className="TitleCard">Caracteristicas</h1>
                    <p>{cliente.caracteristicas}</p>

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
                      <button class="preorder">
                        <p>Ordenar</p>
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
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

};

export default Clientes_index