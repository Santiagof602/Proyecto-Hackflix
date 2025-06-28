import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieGallery.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie)
    return <p className="text-white text-center mt-5">Cargando detalles...</p>;

  return (
    <div className="container text-white py-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded mb-3"
          />
        </div>

        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p>
            <strong>Título original:</strong> {movie.original_title}
          </p>
          <p>
            <strong>Descripción:</strong> {movie.overview || "No disponible."}
          </p>
          <p>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Duración:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Puntuación:</strong> ⭐ {movie.vote_average} / 10
          </p>
          <p>
            <strong>Géneros:</strong>{" "}
            {movie.genres?.map((genre) => genre.name).join(", ") ||
              "No especificado"}
          </p>
          <p>
            <strong>Idioma original:</strong>{" "}
            {movie.original_language?.toUpperCase()}
          </p>
          {movie.homepage && (
            <p>
              <strong>Sitio oficial:</strong>{" "}
              <a
                href={movie.homepage}
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                Ver sitio
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
