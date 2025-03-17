import React, { lazy } from "react";
import { Route,Routes } from "react-router";
import NavBar from "./components/Layout/NavBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
const Home  = lazy(()=> import("./pages/Home.jsx"))
const LoginPage = lazy(()=> import('./pages/LoginPage.jsx'))
const RegisterPage = lazy(()=> import('./pages/Register.jsx'))

function App() {

  

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<Home/>}/>

        </Route>

      </Routes>
      
    </>
  );
}

export default App;
