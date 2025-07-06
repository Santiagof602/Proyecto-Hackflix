// Genres.jsx
import { useNavigate } from "react-router-dom";
import "./Genres.css";
import { GENRES } from "../../consts/genres";

export default function Genres() {
  const navigate = useNavigate();

  return (
    <div className="genres-grid">
      {GENRES.map((genre) => (
        <div
          key={genre.id}
          className="genre-card"
          style={{ backgroundImage: `url(${genre.img})` }}
          onClick={() => navigate(`/genero/${genre.id}`)}
        >
          <div className="genre-overlay">
            <h2>{genre.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
