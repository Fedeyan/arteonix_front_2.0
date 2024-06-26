import React, { useEffect, useState } from "react";
import "./App.css";
import Onboarding from "./pages/Onboarding/Onboarding";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import UserRoutes from "./components/protectedRoutes/UserRoutes";
import Loading from "./components/loading/Loading";
import checkAuthStatus from "./utils/auth/checkAuthStatus";

const App = () => {
  const [render, setRender] = useState(false);

  useEffect(function () {
    checkAuthStatus({ setRender });
  }, []);

  return !render ? (
    <Loading fwh={true} />
  ) : (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Onboarding />} />
        <Route element={<UserRoutes />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
