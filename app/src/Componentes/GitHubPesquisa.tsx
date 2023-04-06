import React, { useState } from "react";
import axios from "axios";
import { InterfaceUsuario } from "../Interfaces/interface";
import Usuario from "./Usuario";
import MensagemErro from "./MensagemErro";

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
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        value={nomeUsuario}
        onChange={(evento) => setNomeUsuario(evento.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && <Usuario {...usuario} />}
      {mensagemErro && <MensagemErro />}
    </div>
  );
};

export default GitHubPesquisa;
