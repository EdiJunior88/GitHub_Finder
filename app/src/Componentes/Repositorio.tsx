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
    <div className="container">
      <div className="w-full my-7">
        <span className="text-salmao-clarinho">{name}</span>

        <p className="py-2 px-5 break-all">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {html_url}
          </a>
        </p>

        <p className="px-5 md:px-32 flex justify-center text-justify text-verde-clarinho">
          {description}
        </p>

        <div className="gap-5 flex justify-center py-2">
          <p>
            <FontAwesomeIcon icon={faStarHalfStroke} /> {stargazers_count}
          </p>
          <p>
            <FontAwesomeIcon icon={faCodeFork} /> {forks_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repositorio;
