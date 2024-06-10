import React from 'react'
import Styles from './Onboarding.module.css'
import LoginForm from '../../components/forms/AuthForms/LoginForm'
import BackButton from '../../components/backButton/BackButton'
import TPLogin from '../../components/TPLogin/TPLogin'
import RegisterForm from '../../components/forms/AuthForms/RegisterForm'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <AuthLayout>
      <div className={Styles.container}>

        {true && <BackButton />}


        <div style={{ textAlign: "center" }}>
          <h1 className={Styles.title}>Registrate</h1>
          <p className={Styles.title_sub}>Registrate para explorar o publicar tu arte</p>
        </div>

        <RegisterForm />
        <TPLogin />
        <p className={Styles.bottom_form_text}> Ya tenés una cuenta? <Link to="/" className={Styles.register_link}>Inicia sesión</Link> y conéctate con el mundo del arte</p>
      </div>
    </AuthLayout>
  )
}

export default Onboarding