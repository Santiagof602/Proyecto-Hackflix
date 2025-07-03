import React, { useState } from "react";

const Generos = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la búsqueda
    console.log("Buscando:", search);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {/* Otros elementos de la navbar */}
    </nav>
  );
};

export default Generos;
