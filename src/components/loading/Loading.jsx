import React from "react";
import { ClimbingBoxLoader, SyncLoader, CircleLoader } from "react-spinners";
import Styles from "./Loading.module.css";

const Loading = ({ type = "CircleLoader", color = "white", fwh = false }) => {
  const parseType = type.toLowerCase();

  const SelectedLoader =
    parseType === "ClimbingBoxLoader"
      ? ClimbingBoxLoader
      : parseType === "CircleLoader"
      ? CircleLoader
      : SyncLoader;

  return (
    <div className={`${Styles.container} ${fwh ? Styles.mvh_100 : ""}`}>
      <SelectedLoader color={color} />
    </div>
  );
};

export default Loading;
