import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OpenRotes from "./pages/OpenRotes";
import PerfilPage from "./pages/PerfilPage";
import ProtectedRotes from "./pages/ProtectedRotes";
import RegisterPage from "./pages/RegisterPage";

const Router = () => (
    <Routes>
      <Route element={<OpenRotes />}>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRotes />}>
        <Route path='/dashboard' element={<DashboardPage/> } />
        <Route path='/perfil' element={<PerfilPage />} />
    </Route>
    </Routes>
  );

export default Router;