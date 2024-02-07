import React, { useEffect, useState } from "react";
import "./style.css";
import { carta } from "../Images";

interface props {
  imageRecepct: string;
  onClick: (image: string) => void;
}

function Card({ imageRecepct, onClick }: props) {
  const [imageCorrect, setImageCorrect] = useState<string>(carta);

  const handleClick = () => {
    onClick(imageRecepct);
    setImageCorrect(imageRecepct);
  };

  return (
    <div className="bodyCard" onClick={handleClick}>
      <img src={imageCorrect} alt="Descrição da Imagem" width={150} />
    </div>
  );
}

export default Card;
