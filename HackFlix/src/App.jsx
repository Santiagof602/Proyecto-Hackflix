import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RatingFilter from "./components/RatingFilter";
import MovieGallery from "./components/MovieGallery";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RatingFilter rating={2} />
      <MovieGallery />
    </>
  );
}
