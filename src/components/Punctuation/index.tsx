import React from "react";
import "./style.css";

interface props {
  points: number;
}

function Punctuation({ points }: props) {
  return (
    <div className="bodyPunctuation">
      <div>Turns: {points}</div>
    </div>
  );
}

export default Punctuation;
