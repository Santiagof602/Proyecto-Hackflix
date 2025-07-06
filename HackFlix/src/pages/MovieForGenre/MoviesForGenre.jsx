import { useParams } from 'react-router-dom';
import MovieGallery from '../Home/MovieGallery';
import { GENRES } from '../../consts/genres';


export default function MoviesByGenre() {
  const { id } = useParams();
  const genreId = parseInt(id);
  const genre = GENRES.find((g) => g.id === genreId);

  return (
    <>
      
    <h2 className="text-center my-4 text-white">
      {genre ? `Películas de ${genre.name}` : "Género no encontrado"}
    </h2>
 

      <MovieGallery genreId={genreId} />
    </>
  );
}
