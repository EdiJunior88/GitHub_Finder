import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  InterfaceRepositorio,
  InterfaceUsuario,
} from "../Interfaces/interface";
import Usuario from "../Componentes/Usuario";
import MensagemErro from "../Componentes/MensagemErro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Repositorio from "../Componentes/Repositorio";

const Repositorios = () => {
  const {nomeUsuario} = useParams<{nomeUsuario: string}>();
  const [repositorio, setRepositorio] = useState<InterfaceRepositorio[]>([]);

  //Chamando a API do GitHub
  useEffect(() => {
    const fetchRepositorio = async () => {
      const respostaRepositorio = await axios.get<InterfaceRepositorio[]>(
        `https://api.github.com/users/${nomeUsuario}/repos?per_page=80&page=1`
      );
      setRepositorio(respostaRepositorio.data);
    };

    fetchRepositorio();
  }, [nomeUsuario]);

  async function buscarUsuario() {}

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
    <div className='container mx-auto h-auto text-center flex flex-col items-center justify-center w-1/3'>
      <div className='container w-9/12 mt-8 py-5 bg-blue-950 rounded-lg'>
        <h1 className="font-['Noto Sans'] text-white text-3xl font-bold">
          Repositórios
        </h1>

        <div>
          <Link to='/'>
            <button>Voltar</button>
          </Link>

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
    </div>
  );
};

export default Repositorios;
