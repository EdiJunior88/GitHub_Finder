import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  InterfaceRepositorio,
  InterfaceUsuario,
} from "../Interfaces/interface";
import Usuario from "./Usuario";
import MensagemErro from "./MensagemErro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Repositorio from "./Repositorio";

const GitHubPesquisa = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [usuario, setUsuario] = useState<InterfaceUsuario | null>(null);
  const [mensagemErro, setMensagemErro] = useState(false);
  const [repositorio, setRepositorio] = useState<InterfaceRepositorio[]>([]);
  const [pesquisaVazio] = useState("");

  //Chamando a API do GitHub
  useEffect(() => {
    if (pesquisaVazio !== "") {
      buscarUsuario();
    }
  }, [nomeUsuario]);

  async function buscarUsuario() {
    try {
      const respostaUsuario = await axios.get<InterfaceUsuario>(
        `http://api.github.com/users/${nomeUsuario}`
      );
      const respostaRepositorio = await axios.get<InterfaceRepositorio[]>(
        `https://api.github.com/users/${nomeUsuario}/repos?per_page=80&page=1`
      );

      setMensagemErro(false);
      setUsuario(respostaUsuario.data);
      setRepositorio(respostaRepositorio.data);
    } catch (erro) {
      setUsuario(null);
      setRepositorio([]);
      setMensagemErro(true);
    }
  }

  //Ordenar 5 repositórios e por maiores estrelas
  const estrelasRepositorios = repositorio
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  //Evento dispara ao apertar a tecla ENTER no input
  const teclaEnterBusca = (evento: React.KeyboardEvent<HTMLElement>) => {
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
          onKeyDown={teclaEnterBusca}
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

        {repositorio.length > 0 && (
          <ul>
            {estrelasRepositorios.map((repositorios, id) => {
              return (
                <li key={id}>
                  <Repositorio
                    name={repositorios.name}
                    html_url={repositorios.html_url}
                    description={repositorios.description}
                    stargazers_count={repositorios.stargazers_count}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GitHubPesquisa;
