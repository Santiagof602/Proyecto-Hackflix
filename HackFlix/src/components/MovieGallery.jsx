import { useEffect, useState } from "react";

export default function MovieGallery() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error cargando películas:", err));
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-6 col-md-3 mb-4" key={movie.id}>
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="img-fluid rounded shadow-sm"
              title={`${movie.title} (${movie.vote_average}/10)`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
