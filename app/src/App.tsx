import React from "react";
import GitHubPesquisa from "./Componentes/GitHubPesquisa";

const App = () => {
  return (
    <div>
      <div className="container mx-auto h-auto text-center flex flex-col items-center justify-center w-1/3">
        <GitHubPesquisa />
      </div>
    </div>
  );
};

export default App;
