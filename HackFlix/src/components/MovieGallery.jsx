import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieGallery() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [page, setPage] = useState(1); // Página actual
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (pageToFetch) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageToFetch}`
      );
      const data = await res.json();
      const newMovies =
        data.results?.filter((movie) => movie.poster_path) || [];
      const updatedMovies = [...movies, ...newMovies];
      setMovies(updatedMovies);
      applyRatingFilter(updatedMovies, ratingFilter);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyRatingFilter = (allMovies, filter) => {
    if (filter === 0) {
      setFilteredMovies(allMovies);
    } else {
      const minRating = filter * 2;
      const filtered = allMovies.filter(
        (movie) => movie.vote_average >= minRating
      );
      setFilteredMovies(filtered);
    }
  };

  useEffect(() => {
    applyRatingFilter(movies, ratingFilter);
  }, [ratingFilter]);

  return (
    <div className="container text-center my-5">
      <h5>Filtrar por rating:</h5>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <Rating
          onClick={(rate) => {
            setRatingFilter(rate);
            applyRatingFilter(movies, rate);
          }}
          initialValue={ratingFilter}
          size={25}
          allowFraction={false}
        />
        <span className="ms-2">& Más</span>
      </div>

      {filteredMovies.length === 0 ? (
        <p>No se encontraron películas con el rating seleccionado.</p>
      ) : (
        <div className="row justify-content-center">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded shadow"
                alt={movie.title}
              />
              <p className="mt-2">{movie.title}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="btn btn-primary mt-4"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Cargar más películas"}
      </button>
    </div>
  );
}

export default MovieGallery;
