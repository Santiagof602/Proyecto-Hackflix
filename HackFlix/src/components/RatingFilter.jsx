import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function RatingFilter({ onChange }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    const minRating = rate / 10;
    onChange(minRating);
  };

  return (
    <div className="text-white mb-4">
      <p>Filtrar por puntuación mínima:</p>
      <Rating onClick={handleRating} ratingValue={rating} size={25} />
    </div>
  );
}
