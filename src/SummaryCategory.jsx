import "./SummaryCategory.css";
export default function SummaryCategory({
  color,
  icon,
  bgColor,
  title,
  score,
}) {
  return (
    <>
      <div className="summary-category" style={{ backgroundColor: bgColor }}>
        <div className="LHS-summary-category">
          <div className="icon">{icon}</div>
          <h3 className="category-title" style={{ color: color }}>
            {title}
          </h3>
        </div>
        <p className="score">
          <span className="my-score">{score}</span> / 100
        </p>
      </div>
    </>
  );
}
