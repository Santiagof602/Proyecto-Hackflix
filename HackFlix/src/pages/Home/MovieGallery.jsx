import { useEffect, useState } from "react";
import "./MovieGallery.css";
import InfiniteScroll from "react-infinite-scroll-component";
import RatingFilter from "../../components/RatingFilter/RatingFilter.jsx";
import MovieModal from "../../components/MovieModal/MovieModal.jsx";
import { useSearch } from "../../components/Search/SearchContext.jsx";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import Banner from "../../components/Banner/Banner"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieGallery({ genreId = null}) {
  const { searchTerm } = useSearch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [minRating, setMinRating] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    resetAndFetch();
  }, [minRating, searchTerm, genreId]);

  const resetAndFetch = async () => {
    setPage(1);
    setHasMore(true);
    const res = await fetchMovies(1, minRating);
    setMovies(res.results);
    if (res.page >= res.total_pages) setHasMore(false);
  };

  const fetchMovies = async (pageToFetch, rating) => {
    let url;

    if (searchTerm.trim()) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&page=${pageToFetch}&query=${encodeURIComponent(
        searchTerm
      )}`;
    } else if (genreId) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&page=${pageToFetch}&with_genres=${genreId}`;
    } else {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&page=${pageToFetch}&vote_average.gte=${rating}`;
    }

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
      <Banner/>
      {searchTerm.trim() ? <h2 className="text-white">Resultados para "{searchTerm}"</h2>
      : !genreId && <RatingFilter onChange={(r) => setMinRating(r)} />}

      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="text-white">Cargando más...</h4>}
        endMessage={
          <p className="text-white text-center">No hay más películas.</p>
        }
      >
        <div className="row">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </InfiniteScroll>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
