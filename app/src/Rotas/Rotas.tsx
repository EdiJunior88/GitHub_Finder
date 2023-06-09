import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitHubPesquisa from "../Componentes/GitHubPesquisa";
import PaginaRepositorios from "../Pagina/PaginaRepositorios";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitHubPesquisa />} />
        <Route path="/repos/:nomeUsuario" element={<PaginaRepositorios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
