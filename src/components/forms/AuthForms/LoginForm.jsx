import { useState } from "react";
import Styles from "./AuthForms.module.css";
import handleInputChange from "../../../utils/Handlers/HandleInputChange";
import submitLogin from "../../../utils/Handlers/submitLogin";
import Loading from "../../loading/Loading";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    saveSession: false,
  });

  const [errorData, setErrorData] = useState({
    username: "",
    password: "",
    formError: "",
  });

  return isLoading ? (

    <Loading type="SyncLoader" />

  ) : (
    <div className={Styles.container}>
      {/* form */}
      <form onSubmit={(e) => submitLogin(e, formData, setErrorData, setIsLoading)} className={Styles.form}>

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

        {/* Password */}
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

        <div className={Styles.form_submit_control}>
          <div className={Styles.save_session_control}>
            <input
              onChange={(e) =>
                handleInputChange(e, setFormData, setErrorData, true)
              }
              type="checkbox"
              name="saveSession"
              checked={formData.saveSession}
              className={Styles.form_checkbox}
            />

            <span>Mantener sesión iniciada</span>
          </div>

          <input
            className={Styles.submit_button}
            type="submit"
            value="Iniciar sesión"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
