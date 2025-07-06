import { Link } from "react-router-dom";
import { useSearch } from "../Search/SearchContext.jsx"; 
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleOnChange = (element) => {
    setSearchTerm(element);
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setSearchTerm("")}>
          HackFlix
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setSearchTerm("")}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/generos"
                onClick={() => setSearchTerm("")}
              >
                Generos
              </Link>
            </li>
            <li className="nav-item">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar"
                onChange={(e) => handleOnChange(e.target.value)}
                value={searchTerm}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
