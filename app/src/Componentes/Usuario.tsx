import React from "react";
import { InterfaceUsuario } from "../Interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

const Usuario = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: InterfaceUsuario) => {
  return (
    <div className="container flex flex-col">
      <div className="bg-blue-950 pb-5 rounded-lg">
        <h1 className="text-2xl">{login}</h1>
        <img
          className="h-36 my-5 mx-auto border-2 border-azul-clarinho rounded-lg"
          src={avatar_url}
          alt={login}
        />
        <p className="my-5">
          {!location ? (
            <span>⛔ Sem Localização</span>
          ) : (
            <FontAwesomeIcon className="pr-3" icon={faEarthAsia} />
          )}
          {location}
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <p className="text-verde-clarinho">Seguidores</p>
            <p className="text-salmao-clarinho">{followers}</p>
          </div>

          <hr className="border border-azul-clarinho h-11" />

          <div>
            <p className="text-verde-clarinho">Seguindo</p>
            <p className="text-salmao-clarinho">{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
