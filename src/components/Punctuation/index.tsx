import React from "react";
import { Title } from "@mantine/core";

interface props {
  points: number;
}

function Punctuation({ points }: props) {
  return (
    <Title c={"white"} p={0} fw={"400"}>
      Points: {points}
    </Title>
  );
}

export default Punctuation;
