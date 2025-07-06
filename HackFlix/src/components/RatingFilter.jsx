import { Rating } from "react-simple-star-rating";

function RatingFilter({ onChange }) {
  const handleRatingChange = (value) => {
    const tmdbRating = value * 2;
    onChange(tmdbRating);
  };

  return (
    <div className="text-center mb-4">
      <h5 className="text-white">Filtrar por rating mínimo:</h5>
      <div className="d-flex justify-content-center align-items-center">
        <Rating onClick={handleRatingChange} size={25} allowFraction={false} />
        <span className="ms-2 text-white"></span>
      </div>
    </div>
  );
}

export default RatingFilter;
