import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitHubPesquisa from "../Componentes/GitHubPesquisa";
import Repositorios from "../Pagina/Repositorios";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitHubPesquisa />} />
        <Route path="/repos/:nomeUsuario" element={<Repositorios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
