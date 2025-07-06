import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center text-white py-5">
      <h1>Error 404</h1>
      <p>Página no encontrada 😢</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
}
