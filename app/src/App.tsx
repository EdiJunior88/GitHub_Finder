import React from "react";
import GitHubPesquisa from "./Componentes/GitHubPesquisa";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-verde-clarinho from-10% to-white">
      <div className="container mx-auto h-auto text-center flex flex-col items-center justify-center w-1/3">
        <GitHubPesquisa />
      </div>
    </div>
  );
};

export default App;
