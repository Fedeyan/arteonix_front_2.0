import React, { useState } from "react";
import Styles from "./AuthForms.module.css";
import handleInputChange from "../../../utils/Handlers/HandleInputChange";
import submitRegister from "../../../utils/Handlers/submitRegister";

const Re = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    acceptTerms: false,
    confirmPassword: "",
  });

  return (
    <div className={Styles.container}>
      {/* form */}
      <form
        onSubmit={(e) => submitRegister(e, formData)}
        className={Styles.form}
      >
        {/* username */}
        <div className={Styles.form_control}>
          <span className={Styles.input_title}>Usuario</span>

          <input
            type="text"
            name="username"
            className={Styles.form_input}
            placeholder="Ej: JohnDoe24"
            value={formData.username}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
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
              onChange={(e) => handleInputChange(e, setFormData)}
            />
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
              onChange={(e) => handleInputChange(e, setFormData)}
            />
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
              onChange={(e) => handleInputChange(e, setFormData)}
            />
          </div>

          {/* submit */}
          <input
            className={Styles.submit_button}
            type="submit"
            value="Registrarme"
          />
        </div>
      </form>
    </div>
  );
};

export default Re;
