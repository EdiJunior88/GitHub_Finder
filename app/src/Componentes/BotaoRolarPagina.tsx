import React from "react";
import { InterfaceBotaoRolarPagina } from "../Interfaces/interface";

const BotaoRolarPagina: React.FC<InterfaceBotaoRolarPagina> = ({
  scroll,
  icone,
}) => {
  const rolarPagina = () => {
    const elementoObservado = document.getElementById(scroll);

    if (elementoObservado) {
      elementoObservado.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="container mx-auto h-12 w-12 bg-azul-clarinho rounded-lg"
      onClick={rolarPagina}
    >
      {icone}
      {scroll}
    </button>
  );
};

export default BotaoRolarPagina;
