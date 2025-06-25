import "./MovieModal.css";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button btn btn-danger" onClick={onClose}>
          Cerrar
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="modal-poster mb-3"
        />
        <h2 className="mb-2">{movie.title}</h2>
        <p>{movie.overview || "Sin descripción disponible."}</p>
      </div>
    </div>
  );
}
