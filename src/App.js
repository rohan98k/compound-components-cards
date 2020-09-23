import React from "react";
import "./App.scss";
import movies from "./data.json";

import { Card } from "./components/styles";

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card></Card>
      ))}
    </main>
  );
}

export default App;
