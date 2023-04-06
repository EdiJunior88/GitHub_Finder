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
    <div className='container flex flex-col'>
      <div>
        <p>{login}</p>
        <img
          className='h-36 my-5 mx-auto border-2 border-blue-950 rounded-lg'
          src={avatar_url}
          alt={login}
        />
        <p>{location}</p>
        <p className='my-5'>{bio}</p>
      </div>

      <div className='flex flex-row items-center justify-center gap-4'>
        <div>
          <p>Seguidores</p>
          <p>{followers}</p>
        </div>

        <hr className='border border-blue-950 h-11' />

        <div>
          <p>Seguindo</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
