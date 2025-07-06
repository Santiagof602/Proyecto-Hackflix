import Navbar from "./components/Navbar/Navbar";
import MovieGallery from "./pages/Home/MovieGallery";
import MovieDetails from "./pages/Home/MovieDetails";
import NotFound from "./components/Error404/NotFound";
import Genres from "./pages/MovieForGenre/Generes";
import MoviesByGenre from "./pages/MovieForGenre/MoviesForGenre";
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
        <Route path="/generos/:id" element={<MoviesByGenre />} />
      </Routes>
    </BrowserRouter>
  );
}
