import { useState } from "react";
import Styles from "./AuthForms.module.css";
import handleInputChange from "../../../utils/Handlers/HandleInputChange";
import submitRegister from "../../../utils/Handlers/submitRegister";
import Loading from "../../loading/Loading";
import BackButton from "../../backButton/BackButton";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    acceptTerms: false,
    confirmPassword: "",
  });

  const [errorData, setErrorData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    formError: "",
  });

  return isLoading ? (

    <Loading type="SyncLoader" />

  ) : (
    <div className={Styles.container}>

      {/* form */}
      <form
        onSubmit={(e) => submitRegister(e, formData, setErrorData, setIsLoading)}
        className={Styles.form}
      >

        {/* form error */}
        {errorData.formError && (
          <span className={Styles.form_error}>{errorData.formError}</span>
        )}

        {/* username */}
        <div className={Styles.form_control}>
          <span className={Styles.input_title}>Usuario</span>

          <input
            type="text"
            name="username"
            className={Styles.form_input}
            placeholder="Ej: JohnDoe24"
            value={formData.username}
            onChange={(e) => handleInputChange(e, setFormData, setErrorData)}
          />

          {errorData.username && (
            <span className={`${Styles.input_error} ${Styles.input_error_fw}`}>
              {errorData.username}
            </span>
          )}
        </div>

        {/* Passwords */}

        <div className={Styles.register_passwords_container}>
          {/* password */}
          <div className={Styles.form_control}>
            <span className={Styles.input_title}>Contraseña</span>

            <input
              type="password"
              name="password"
              className={Styles.form_input}
              placeholder="Ej: ContraSegura1"
              value={formData.password}
              onChange={(e) => handleInputChange(e, setFormData, setErrorData)}
            />

            {errorData.password && (
              <span className={Styles.input_error}>{errorData.password}</span>
            )}
          </div>

          {/* confirm password */}
          <div className={Styles.form_control}>
            <span className={Styles.input_title}>Confirma la contraseña</span>

            <input
              type="password"
              name="confirmPassword"
              className={Styles.form_input}
              placeholder="Ej: ContraSegura1"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange(e, setFormData, setErrorData)}
            />

            {errorData.confirmPassword && (
              <span className={Styles.input_error}>
                {errorData.confirmPassword}
              </span>
            )}
          </div>
        </div>

        <div className={Styles.form_submit_control}>
          {/* email */}
          <div className={Styles.form_control}>
            <span className={Styles.input_title}>Correo electrónico</span>

            <input
              type="text"
              name="email"
              className={Styles.form_input}
              placeholder="Ej: johndoe24@gmail.com"
              value={formData.email}
              onChange={(e) => handleInputChange(e, setFormData, setErrorData)}
            />

            {errorData.email && (
              <span className={Styles.input_error}>{errorData.email}</span>
            )}
          </div>

          {/* submit */}
          <input
            className={Styles.submit_button}
            type="submit"
            value="Registrarme"
          />
        </div>
      </form>

      {errorData.formError &&
        errorData.formError.toLowerCase().includes("usuario") && (
          <BackButton to={"/"} text="Iniciar sesión" />
        )}
    </div>
  );
};

export default RegisterForm;
