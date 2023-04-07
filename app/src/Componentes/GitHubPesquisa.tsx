import React, { useState } from "react";
import axios from "axios";
import { InterfaceUsuario } from "../Interfaces/interface";
import Usuario from "./Usuario";
import MensagemErro from "./MensagemErro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const GitHubPesquisa = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [usuario, setUsuario] = useState<InterfaceUsuario | null>(null);
  const [mensagemErro, setMensagemErro] = useState(false);

  //Chamando a API do GitHub
  const buscarUsuario = async () => {
    try {
      const respostaUsuario = await axios.get<InterfaceUsuario>(
        `http://api.github.com/users/${nomeUsuario}`
      );

      setMensagemErro(false);
      setUsuario(respostaUsuario.data);
    } catch (erro) {
      setUsuario(null);
      setMensagemErro(true);
    }
  };

  //Evento dispara ao dar ENTER no input
  const handleKeyDown = (evento: React.KeyboardEvent<HTMLElement>) => {
    if (evento.key === "Enter") {
      buscarUsuario();
    }
  };

  return (
    <div className='container w-9/12 mt-8 py-5 bg-blue-950 rounded-lg'>
      <h1 className="font-['Noto Sans'] text-white text-3xl font-bold">
        GitHub Finder
      </h1>
      <div className=' w-auto flex items-center justify-center'>
        <input
          className='text-blue-950 w-4/6 my-7 mr-3 pl-3 py-1 rounded-md placeholder-blue-950 placeholder:text-start'
          type='text'
          placeholder='Digite o nome do usuário'
          value={nomeUsuario}
          onChange={(evento) => setNomeUsuario(evento.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={buscarUsuario}>
          <FontAwesomeIcon
            className='h-6 text-azul-clarinho'
            icon={faMagnifyingGlass}
          />
        </button>
      </div>

      <div>
        {usuario && <Usuario {...usuario} />}
        {mensagemErro && <MensagemErro />}
      </div>
    </div>
  );
};

export default GitHubPesquisa;
