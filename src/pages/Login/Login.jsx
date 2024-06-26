import React from "react";
import Styles from "./Login.module.css";
import LoginForm from "../../components/forms/AuthForms/LoginForm";
import BackButton from "../../components/backButton/BackButton";
import TPLogin from "../../components/TPLogin/TPLogin";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <div className={Styles.container}>
        <div style={{ textAlign: "center" }}>
          <h1 className={Styles.title}>Iniciá sesión</h1>
          <p className={Styles.title_sub}>
            Iniciá sesión para conectarte y mostrar tu arte
          </p>
        </div>

        <LoginForm />
        <TPLogin />
        <p className={Styles.bottom_form_text}>
          {" "}
          Eres nuevo por aquí?{" "}
          <Link to={"/register"} className={Styles.register_link}>
            Registrate
          </Link>{" "}
          y forma parte nuestra comunidad.
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
