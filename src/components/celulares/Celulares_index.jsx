import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { dataBase } from '../../firebase/dataBase'

const Celulares_index = () => {
  const [celulares, setCelulares] = useState([])
  const celCard = collection(dataBase, "Admin-celulares")

  const listarCelulares = async () => {
    const datos = await getDocs(celCard)
    console.log(datos)
    setCelulares(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    console.log(celulares)
  }

  const eliminarCelular = async (id) => {
    const celDelete = doc(dataBase, "Admin-celulares", id)
    await deleteDoc(celDelete)
    listarCelulares()
  }

  useEffect(() => {
    listarCelulares()
  }, [])

  return (
    <section className='container'>
      <section className='celulares-container'>
        <Link to='/add-cel'>Agregar celular</Link>
        <section className='listado-celulares'>
          {celulares.map((celular) => (
          <div key={celular.id} className="cel-card">
            <img src={`${celular.imagen}`} alt="card-img" />
            <div className="cel-subcont">
              <div className="cel-info">
                <span>
                  <h2>Marca:</h2>
                  <p>{celular.marca}</p>
                </span>
                <span>
                  <h2>Referencia:</h2>
                  <p>{celular.referencia}</p>
                </span>
                <span>
                  <h2>Precio:</h2>
                  <p>{celular.precio}</p>
                </span>
                <span>
                  <h2>Caracteristicas:</h2>
                  <p>{celular.caracteristicas}</p>
                </span>
              </div>
              <div className="acciones">
                <button onClick={() => eliminarCelular(celular.id)}>
                <i className="fa-solid fa-trash"></i>
                </button>
                <button>
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          </div>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Celulares_index