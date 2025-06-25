import React, { useEffect, useState } from "react";
import "./MovieCarousel.css";
import MovieModal from "./MovieModal";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES&page=1`;

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const withPoster = data.results.filter((m) => m.poster_path);
        setMovies(withPoster);
      })
      .catch((err) => console.error(err));
  }, []);

  const groupMovies = (movies, perGroup = 6) => {
    const groups = [];
    for (let i = 0; i < movies.length; i += perGroup) {
      groups.push(movies.slice(i, i + perGroup));
    }
    return groups;
  };

  if (movies.length === 0) {
    return <p className="text-white text-center">Cargando películas...</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-white mb-3">Películas de Acción</h2>
      <div
        id="movieCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupMovies(movies).map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex justify-content-start gap-3 px-3">
                {group.map((movie) => (
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;
