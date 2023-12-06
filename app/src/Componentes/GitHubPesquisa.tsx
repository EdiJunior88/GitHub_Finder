import { useEffect, useState } from "react";
import axios from "axios";
import { InterfaceUsuario } from "../Interfaces/interface";
import Usuario from "./Usuario";
import MensagemErro from "./MensagemErro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Botao from "./Botao";

const GitHubPesquisa = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const [usuario, setUsuario] = useState<InterfaceUsuario | null>(null);
  const [mensagemErro, setMensagemErro] = useState<boolean>(false);
  const [pesquisaVazio] = useState<string>("");

  //O useNavigate é um hook para navegar entre diferentes rotas
  const navegacao = useNavigate();

  //Enquanto o input estiver vazio
  //a API não será chamada ao abrir a página
  useEffect(() => {
    if (pesquisaVazio !== "") {
      buscarUsuario();
    }
  }, [nomeUsuario]);

  //Redireciona para a página REPOSITÓRIOS
  //mantendo o usuário pesquisado no input busca
  const manipularNavegacao = (evento: React.FormEvent) => {
    evento.preventDefault();
    navegacao(`/repos/${nomeUsuario}`);
  };

  //Chamando a API do GitHub para pegar os dados do usuário
  async function buscarUsuario() {
    const token = import.meta.env.VITE_GITHUB_API_KEY;

    try {
      const respostaUsuario = await axios.get<InterfaceUsuario>(
        `https://api.github.com/users/${nomeUsuario}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMensagemErro(false);
      setUsuario(respostaUsuario.data);
    } catch (erro) {
      setUsuario(null);
      setMensagemErro(true);
    }
  }

  //Evento é acionado ao apertar a tecla ENTER no input
  const teclaEnterBusca = (evento: React.KeyboardEvent<HTMLElement>) => {
    if (evento.key === "Enter") {
      buscarUsuario();
    }
  };

  return (
    <div className='container md:w-2/5 mx-auto h-auto text-center flex flex-col items-center justify-center'>
      <div className='w-full mt-6 py-5 bg-blue-950 rounded-lg'>
        <h1 className="font-['Noto Sans'] text-white text-3xl font-bold">
          GitHub Finder
        </h1>

        <div className=' w-auto flex items-center justify-center'>
          <input
            className='text-blue-950 w-4/6 my-5 mr-3 pl-3 py-1 rounded-md placeholder-blue-950 placeholder:text-start'
            type='text'
            placeholder='Digite o nome do usuário'
            value={nomeUsuario}
            onChange={(evento) => setNomeUsuario(evento.target.value)}
            onKeyDown={teclaEnterBusca}
          />
          <button type='submit' onClick={buscarUsuario}>
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

      <div className='container mx-auto my-5 w-64'>
        {usuario ? (
          <Link to='/repositorios' onClick={manipularNavegacao}>
            <Botao text='Os 5 melhores repositórios' />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default GitHubPesquisa;
