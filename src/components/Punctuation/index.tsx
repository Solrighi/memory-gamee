import React from "react";
import "./style.css";

interface props {
  ponts: number;
}

function Pontuation({ ponts }: props) {
  return (
    <div className="bodyPontuation">
      <h1>Pontuação</h1>
      <div>{ponts}</div>
    </div>
  );
}

export default Pontuation;
