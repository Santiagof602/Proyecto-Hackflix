// Genres.jsx
import { useNavigate } from "react-router-dom";
import "./Genres.css";
import { GENRES } from "../../consts/genres";
import { useSearch } from "../Search/SearchContext.jsx";

export default function Genres() {
  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();

  const handleGenreClick = (genreId) => {
    navigate(`/genero/${genreId}`);
    setSearchTerm("");
  };

  return (
    <div className="genres-grid">
      {GENRES.map((genre) => (
        <div
          key={genre.id}
          className="genre-card"
          style={{ backgroundImage: `url(${genre.img})` }}
          onClick={() => handleGenreClick(genre.id)}
        >
          <div className="genre-overlay">
            <h2>{genre.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
