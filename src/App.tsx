import React from "react";
import "./App.css";
import PlayingField from "./components/PlayingField";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <header>
          <h1>Memory Game</h1>
        </header>
        <div className="components">
          <PlayingField />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
