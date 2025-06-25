import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RatingFilter from "./RatingFilter";
import "./MovieGallery.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieGallery() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [minRating, setMinRating] = useState(0); // rating mínimo

  useEffect(() => {
    resetAndFetch();
  }, [minRating]);

  const resetAndFetch = async () => {
    setPage(1);
    setHasMore(true);
    const res = await fetchMovies(1, minRating);
    setMovies(res.results);
    if (res.page >= res.total_pages) setHasMore(false);
  };

  const fetchMovies = async (pageToFetch, rating) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageToFetch}&vote_average.gte=${rating}`;
    const res = await fetch(url);
    return await res.json();
  };

  const fetchMoreMovies = async () => {
    const nextPage = page + 1;
    const res = await fetchMovies(nextPage, minRating);
    setMovies((prev) => [...prev, ...res.results]);
    setPage(nextPage);
    if (res.page >= res.total_pages) setHasMore(false);
  };

  return (
    <div className="movie-gallery container py-4">
      <h2 className="text-white mb-4">Películas</h2>
      <RatingFilter onChange={(newRating) => setMinRating(newRating)} />
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="text-white">Cargando más películas...</h4>}
        endMessage={
          <p className="text-white text-center">¡No hay más películas!</p>
        }
      >
        <div className="row">
          {movies.map((movie) => (
            <div className="col-6 col-md-3 mb-4" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid rounded shadow"
              />
              <p className="text-white mt-2">{movie.title}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
