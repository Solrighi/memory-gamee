import React from "react";
import PlayingField from "./components/PlayingField";
import { MantineProvider, Stack, Title, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Source Serif 4",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Stack bg={"#1a1522"} mih={"100vh"} align="center">
        <Title c={"white"} p={0} fw={"400"}>
          Memory Game
        </Title>
        <PlayingField />
      </Stack>
    </MantineProvider>
  );
}

export default App;
