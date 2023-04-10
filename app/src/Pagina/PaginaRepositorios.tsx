import React, { useEffect, useState } from "react";
import axios from "axios";
import { InterfaceRepositorio } from "../Interfaces/interface";
import { Link, useParams } from "react-router-dom";
import Repositorio from "../Componentes/Repositorio";

const PaginaRepositorios = () => {
  const { nomeUsuario } = useParams<{ nomeUsuario: string }>();
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

  //Ordenar 5 repositórios e por maiores estrelas
  const estrelasRepositorios = repositorio
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  return (
    <div className='container w-screen md:w-3/5 mx-auto h-auto text-center flex flex-col items-center justify-center'>
      <div className='mt-8 pt-5 bg-blue-950 rounded-lg'>
        <h1 className="font-['Noto Sans'] text-white text-3xl font-bold">
          Repositórios
        </h1>

        <div>
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
                      forks_count={repositorios.forks_count}
                    />
                    {id !== estrelasRepositorios.length - 1 && <hr className='w-2/3 mx-auto border-azul-clarinho' />}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className='container mx-auto my-5'>
        <Link to='/'>
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaRepositorios;
