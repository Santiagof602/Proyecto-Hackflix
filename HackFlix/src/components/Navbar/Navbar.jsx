import { Link } from "react-router-dom";
import { useSearch } from "../Search/SearchContext.jsx"; 
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnChange = (value) => {
    setSearchTerm(value);
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-container">
        <Link className="custom-navbar-brand" to="/" onClick={() => setSearchTerm("")}>
          HackFlix
        </Link>

        <button className="custom-navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`custom-navbar-links ${menuOpen ? "open" : ""}`}>
          <Link className="custom-nav-link" to="/" onClick={() => setSearchTerm("")}>
            Inicio
          </Link>
          <Link className="custom-nav-link" to="/generos" onClick={() => setSearchTerm("")}>
            Géneros
          </Link>
          <div className="custom-search-container">
            <input
              type="text"
              className="custom-search-input"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;