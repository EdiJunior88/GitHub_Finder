import React, { useEffect, useState } from "react";
import { InterfaceCarregando } from "../Interfaces/interface";

const Carregando = ({ intervalo }: InterfaceCarregando) => {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setCarregando(false);
    }, intervalo);

    return () => {
      clearTimeout(tempo);
    };
  }, [intervalo]);

  return (
    <>
      {carregando ? (
        <div className='carregando'>
          <div className='carregando-spinner' />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Carregando;
