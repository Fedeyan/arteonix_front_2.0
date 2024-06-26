import React from "react";
import Styles from "./BackButton.module.css";
import { Link } from "react-router-dom";

const BackButton = ({ to, text = "Volver" }) => {
  return (
    <Link to={to} className={Styles.back_button}>
      &lt; {text}
    </Link>
  );
};

export default BackButton;
