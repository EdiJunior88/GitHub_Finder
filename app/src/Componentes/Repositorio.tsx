import React from "react";
import { InterfaceRepositorio } from "../Interfaces/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";

const Repositorio = ({
  name,
  html_url,
  description,
  stargazers_count,
  forks_count,
}: InterfaceRepositorio) => {
  return (
    <div>
      <p className='text-red-500'>{name}</p>
      <p>{html_url}</p>
      <p>{description}</p>
      <p>
        <FontAwesomeIcon icon={faStarHalfStroke} /> {stargazers_count}
      </p>
      <p>
        <FontAwesomeIcon icon={faCodeFork} /> {forks_count}
      </p>
    </div>
  );
};

export default Repositorio;
