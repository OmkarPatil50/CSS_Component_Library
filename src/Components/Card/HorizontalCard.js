import "./Card.css";
export function HorizontalCard({
  title = "Card Title",
  description = "This is horizontal card",
  style = {}
}) {
  return (
    <div>
      <div className="card horizontal-card" style={{ ...style }}>
        <img src="https://loremflickr.com/320/240/animal" alt="Card" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
