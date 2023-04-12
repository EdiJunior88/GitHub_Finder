import React from "react";
import { InterfaceBotao } from "../Interfaces/interface";

const Botao: React.FC<InterfaceBotao> = ({ text }) => {
  return (
    <div className="container mx-auto bg-azul-clarinho text-blue-950 font-semibold py-3 rounded-lg">
      <button>{text}</button>
    </div>
  );
};

export default Botao;
