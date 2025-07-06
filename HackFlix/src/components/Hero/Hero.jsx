import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
      <h1 className="display-3 fw-bold">¡Tus películas favoritas!</h1>
      <p className="lead">
        Disfrutá de los mejores títulos del cine internacional.
      </p>
    </header>
  );
}
