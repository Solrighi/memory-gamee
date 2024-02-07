import React from "react";
import "./App.css";
import PlayingField from "./components/PlayingField";
import Pontuation from "./components/Punctuation";
// import "@mantine/core/styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jodo da Memória</h1>
      </header>
      <div className="components">
        <PlayingField />
      </div>
    </div>
  );
}

export default App;
