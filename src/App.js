// import React from "react"; NAO PRECISA NA VERSAO 18 DO REACT
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import MeusPedidos from "./pages/MeusPedidos";
import Produtos from "./pages/Produtos";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Menu />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/meus-pedidos" element={<MeusPedidos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

