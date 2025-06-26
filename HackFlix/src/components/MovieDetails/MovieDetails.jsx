import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
        );
        
        if (!response.ok) {
          throw new Error('Película no encontrada');
        }
        
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId, navigate]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="movie-details-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !movie) return null;

  return (
    <div className="movie-details">
      <button onClick={handleBack} className="back-button">
        ← Volver a inicio
      </button>
      
      <article className="movie-card">
        <h2>{movie.title}</h2>
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <section className="movie-info">
          <p><strong>Género:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
          <p><strong>Calificación:</strong> {movie.vote_average}/10</p>
          <p><strong>Sinopsis:</strong> {movie.overview}</p>
        </section>
      </article>
    </div>
  );
};

export default MovieDetails;