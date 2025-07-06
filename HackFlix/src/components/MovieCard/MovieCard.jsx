import { useState } from "react";
import "./MovieCard.css";

export default function MovieCard({ movie, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hasImage = movie.poster_path !== null;

  return (
    <div
      className="col-6 col-md-3 mb-4 clickable-card"
      onClick={onClick}
    >
      <div className="position-relative">
      {hasImage ? (
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className={`img-fluid rounded shadow ${imageLoaded ? "visible-image" : "hidden-image"}`}
      onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div
            className="loader-container"
            role="status"
            aria-live="polite"
            aria-label="Cargando"
          >
            <span className="spinner" />
          </div>
        )}
      </div>
      <p className="text-white mt-2">{movie.title}</p>
    </div>
  );
}
