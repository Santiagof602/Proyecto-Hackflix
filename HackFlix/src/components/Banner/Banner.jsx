import MovieCarousel from '../MovieCarousel/MovieCarousel';
import './Banner.css';
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>
          Todas tus <span className="highlight">Pelis</span>, <br />
          En un solo lugar.
        </h1>
        <div className="banner-details">
        </div>
        
      </div>
        <div className="banner-carousel">
            <MovieCarousel /> 
            </div>
    </section>
  );
}