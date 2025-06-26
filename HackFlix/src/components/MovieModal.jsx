import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieModal.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieModal({ movie, onClose }) {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movie) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [movie]);

  const handleMoreInfo = () => {
    onClose();
    navigate(`/pelicula/${movie.id}`);
  };

  if (!movieDetails) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button btn btn-danger" onClick={onClose}>
          Cerrar
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="modal-poster mb-3"
        />
        <h2 className="mb-2">{movieDetails.title}</h2>
        <p>{movieDetails.overview || "Sin descripción disponible."}</p>
        <button className="btn btn-primary mt-3" onClick={handleMoreInfo}>
          Más información
        </button>
      </div>
    </div>
  );
}
