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
      <img src={avatar_url} alt={login} />
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
