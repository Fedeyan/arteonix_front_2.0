import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
  const { authStatus } = useSelector((state) => state?.authentication);

  console.log(authStatus);
  return !authStatus ? <Navigate to={"/"} /> : <Outlet />;
};

export default UserRoutes;
