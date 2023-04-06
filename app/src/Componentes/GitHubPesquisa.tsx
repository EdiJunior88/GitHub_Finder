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

  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          className='bg-blue-950 text-white my-7 mr-2 px-11 py-1 rounded-md placeholder-red-100 placeholder:text-end'
          type='text'
          placeholder='Digite o nome do usuário'
          value={nomeUsuario}
          onChange={(evento) => setNomeUsuario(evento.target.value)}
        />
        <button onClick={buscarUsuario}>
          <FontAwesomeIcon className='h-6' icon={faMagnifyingGlass} />
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
