import React from "react";
import { ClimbingBoxLoader, SyncLoader } from "react-spinners";
import Styles from "./Loading.module.css";

const Loading = ({ type, color = "white" }) => {
  const SelectedLoader =
    type.toLowerCase() === "ClimbingBoxLoader" ? ClimbingBoxLoader : SyncLoader;

  return (
    <div className={Styles.container}>
      <SelectedLoader color={color} />
    </div>
  );
};

export default Loading;
