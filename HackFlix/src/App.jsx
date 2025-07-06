import Navbar from "./components/Navbar";
import MovieGallery from "./components/MovieGallery";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";
import Genres from "./components/MovieForGenre/Generes";
import MoviesByGenre from "./components/MovieForGenre/MoviesForGenre";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieGallery />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/generos" element={<Genres />} />
        <Route path="/genero/:id" element={<MoviesByGenre />} />
      </Routes>
    </BrowserRouter>
  );
}
