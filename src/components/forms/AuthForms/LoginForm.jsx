import React, { useState } from 'react'
import Styles from './AuthForms.module.css'
import handleInputChange from '../../../utils/Handlers/HandleInputChange'


const LoginForm = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    saveSession: "off"
  })

  return (
    <div className={Styles.container}>
      {/* form */}
      <form action="" className={Styles.form}>

        {/* username */}
        <div className={Styles.form_control}>

          <span className={Styles.input_title}>Usuario</span>

          <input
            type="text"
            name='username'
            className={Styles.form_input}
            placeholder='Ej: JohnDoe24'
            value={formData.username}
            onChange={(e) => handleInputChange(e, setFormData)}
          />

        </div>

        {/* Password */}
        <div className={Styles.form_control}>

          <span className={Styles.input_title}>Contraseña</span>


          <input
            type="password"
            name='password'
            className={Styles.form_input}
            placeholder='Ej: ContraSegura1'
            value={formData.password}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
        </div>

        <div className={Styles.form_submit_control}>

          <div className={Styles.save_session_control}>

            <input
              onChange={(e) => handleInputChange(e, setFormData, true)}
              type="checkbox"
              name="saveSession"
              checked={formData.saveSession}
              className={Styles.form_checkbox}
            />

            <span>Mantener sesión iniciada</span>

          </div>

          <input className={Styles.submit_button} type="submit" value="Iniciar sesión" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm