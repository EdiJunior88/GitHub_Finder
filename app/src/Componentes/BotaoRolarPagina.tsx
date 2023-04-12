import React from "react";
import { InterfaceBotaoRolarPagina } from "../Interfaces/interface";

const BotaoRolarPagina: React.FC<InterfaceBotaoRolarPagina> = ({ scroll }) => {
  const rolarPagina = () => {
    const elementoObservado = document.getElementById(scroll);

    if (elementoObservado) {
      elementoObservado.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className='container mx-auto w-6 bg-azul-clarinho'
      onClick={rolarPagina}>
      {scroll}
    </button>
  );
};

export default BotaoRolarPagina;
