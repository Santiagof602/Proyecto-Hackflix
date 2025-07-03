import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function SearchPage() {
  const searchInput = useInput("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchInput.value.trim() !== "") {
        fetchMovies(searchInput.value);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchInput.value]);

  const fetchMovies = async (query) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error en búsqueda:", error);
      setResults([]);
    }
  };

  return (
    <div className="container py-4 text-white">
      <h2>Buscar películas</h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Escribí un título..."
        {...searchInput}
      />

      {searchInput.value && results.length === 0 && (
        <p>Lo sentimos, no se encontraron películas con el título buscado.</p>
      )}

      <div className="row">
        {results.map((movie) => (
          <div
            key={movie.id}
            className="col-6 col-md-3 mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/pelicula/${movie.id}`)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=Sin+imagen"
              }
              alt={movie.title}
              className="img-fluid rounded shadow"
            />
            <p className="mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
