import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "../pages/Inicial/Inicial";
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Inicial} />
        <Route path="/home" Component={Home} />
        <Route path="/register" Component={Cadastro} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default Router