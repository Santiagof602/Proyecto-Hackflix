import Navbar from "./components/Navbar";
import MovieGallery from "./components/MovieGallery";
import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/SearchPage"; //
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieGallery />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
