import React from "react";
import { InterfaceRepositorio } from "../Interfaces/interface";

const Repositorio = ({ name, html_url, description, stargazers_count }: InterfaceRepositorio) => {
  return (
    <div>
      <p className="text-red-500">{name}</p>
      <p>{html_url}</p>
      <p>{description}</p>
      <p>estrelas</p>
      <p>{stargazers_count}</p>
    </div>
  );
};

export default Repositorio;
