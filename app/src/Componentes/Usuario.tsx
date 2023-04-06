import React from "react";
import { InterfaceUsuario } from "../Interfaces/interface";

const Usuario = ({
  login,
  avatar_url,
  location,
  bio,
  followers,
  following,
}: InterfaceUsuario) => {
  return (
    <div>
      <p>{login}</p>
      <img className="h-36 mx-auto border border-2 border-blue-950 rounded-lg" src={avatar_url} alt={login} />
      <p>{location}</p>
      <p>{bio}</p>
      <p>Seguidores</p>
      <p>{followers}</p>
      <p>Seguindo</p>
      <p>{following}</p>
    </div>
  );
};

export default Usuario;
