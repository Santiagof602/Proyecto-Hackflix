import React from "react";

function Nav() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>HackFlix</div>
        <ul style={ulStyle}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "#333",
  padding: "1rem 2rem",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
};

export default Nav;
