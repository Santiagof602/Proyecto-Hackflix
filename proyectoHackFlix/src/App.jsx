import React from "react";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div>
      <Nav />
      <main style={{ padding: "1rem" }}>
        <h1>Tus Peliculas Favoritas</h1>
        <p>
          Has llegado al lugar ideal para encontrarlas y informarte mas sobre
          ellas
        </p>
      </main>
    </div>
  );
}

export default App;
