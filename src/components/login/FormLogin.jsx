import React, { useState } from 'react'

const FormLogin = () => {
    const input = document.querySelectorAll('#form-login input')
    const userA = document.getElementById('user-alert')
    const passA = document.getElementById('pass-alert')
    const checkUser = document.getElementById('checkUser')
    const checkPass = document.getElementById('checkPass')
    const exclamationPass = document.getElementById('exclamationPass')
    const exclamationUser = document.getElementById('exclamationUser')
    const advLog = document.getElementById('adv-log')

    const user = /^[a-zA-Z0-9-_]{3,32}$/
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const validacionLogin = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case "username":
                if (user.test(e.target.value)) {
                    checkUser.style.opacity = '1'
                    exclamationUser.style.opacity = '0'
                    userA.style.opacity = '0'
                    advLog.style.opacity = '0'
                } else {
                    checkUser.style.opacity = '0'
                    exclamationUser.style.opacity = '1'
                    userA.style.opacity = '1'
                    advLog.style.opacity = '1'
                }
            break;
            case "password":
                if (pass.test(e.target.value)) {
                    checkPass.style.opacity = '1'
                    exclamationPass.style.opacity = '0'
                    passA.style.opacity = '0'
                    advLog.style.opacity = '0'
                } else {
                    checkPass.style.opacity = '0'
                    exclamationPass.style.opacity = '1'
                    passA.style.opacity = '1'
                    advLog.style.opacity = '1'
                }
            break;
        }
    }

    input.forEach((input) => {
        input.addEventListener("blur", validacionLogin)
        input.addEventListener("keyup", validacionLogin)
    })

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <section className='contenedor-principal'>
        <div className="divFondo"></div>
        <div className="cont-form-login">
            <form id='form-login' action="">
                <h1>Inicio de sesión</h1>
                <div className="inp-login">
                    <input name='username' id='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <i id="checkUser" class="fa-solid fa-check"></i>
                    <i id="exclamationUser" class="fa-solid fa-circle-exclamation"></i>
                    <div id="user-alert" className="login-alert">
                        <p>Solo se permiten letras, números, guón y guión bajo, minimo 3 caracteres.</p>
                    </div>
                </div>
                <div className="inp-login">
                    <input name='password' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <i id="checkPass" class="fa-solid fa-check"></i>
                    <i id="exclamationPass" class="fa-solid fa-circle-exclamation"></i>
                    <div id="pass-alert" className="login-alert">
                        <p>Debe contener mínimo 8 caracteres, una letra minuscula, una mayuscula y puede tener caracteres especiales.</p>
                    </div>
                </div>
                <p id='adv-log'>Rellene los campos correctamente.</p>
                <button name="" id="" className='login-but' onClick={validacionLogin} >Iniciar sesión</button>
            </form>
        </div>
    </section>
  )
}

export default FormLogin