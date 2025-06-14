import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGallery from "./components/MovieGallery";
import MovieCarousel from "./components/MovieCarousel";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieGallery />
      <MovieCarousel />
    </>
  );
}
