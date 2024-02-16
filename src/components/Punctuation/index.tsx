import React from "react";
import "./style.css";

interface props {
  points: number;
}

function Punctuation({ points }: props) {
  return (
    <div className="bodyPunctuation">
      <div>Points: {points}</div>
    </div>
  );
}

export default Punctuation;
