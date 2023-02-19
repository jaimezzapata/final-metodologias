import React from 'react'
import Header from '../../helper/Header'
import FormLogin from './FormLogin'
import './style.css'

const Login_index = () => {
  return (
    <section className='contenedor-principal'>
      <Header />
      <FormLogin />
    </section>
  )
}

export default Login_index