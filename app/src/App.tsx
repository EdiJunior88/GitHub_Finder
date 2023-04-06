import React from "react";
import GitHubPesquisa from "./Componentes/GitHubPesquisa";

const App = () => {
  return (
    <>
      <div className="container mx-auto text-center mt-24 flex flex-col items-center justify-center">
        <span className="font-['Noto Sans']">GitHub Finder</span>
        <GitHubPesquisa />
      </div>
    </>
  );
};

export default App;
