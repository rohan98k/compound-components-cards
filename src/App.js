import React from "react";
import "./App.scss";
import { Card } from "./components/Card";
import movies from "./data";

function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card classes="mr" key={`${movie.id}`}>
          <Card.Image src={movie.image} alt={movie.alt} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Text>{movie.rating}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default App;
