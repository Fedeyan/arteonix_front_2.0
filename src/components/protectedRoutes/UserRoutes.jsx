import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
  const auth = false;
  return !auth ? <Navigate to={"/"} /> : <Outlet />;
};

export default UserRoutes;
