export default function RatingFilter({ rating }) {
  return (
    <div className="text-center my-4">
      <span className="me-2">Filtrar por rating:</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? "text-warning" : "text-secondary"}
        >
          ★
        </span>
      ))}
      <span className="ms-2">& Más</span>
    </div>
  );
}
