import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../Card";
import {
  blastoise,
  bulbassaur,
  caterpie,
  charizard,
  charmander,
  charmeleon,
  carta,
} from "../Images";
import Pontuation from "../Punctuation";

function PlayingField() {
  const [imageHistory, setImageHistory] = useState<string>("");
  const [points, setPoints] = useState<number>(0);

  let cardList = [
    blastoise,
    bulbassaur,
    caterpie,
    charizard,
    charmander,
    charmeleon,
    blastoise,
    bulbassaur,
    caterpie,
    charizard,
    charmander,
    charmeleon,
  ];

  const handleClick = (image: string) => {
    if (image === imageHistory) {
      setPoints(points + 1);
    } else {
      setImageHistory(image);
    }
  };

  return (
    <>
      <div className="bodyPlayingField">
        {cardList.map((card, index) => {
          return <Card key={index} onClick={handleClick} imageRecepct={card} />;
        })}
      </div>
      <Pontuation ponts={points} />
    </>
  );
}

export default PlayingField;
