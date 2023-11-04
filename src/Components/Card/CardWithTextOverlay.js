import "./Card.css";
export function CardWithTextOverlay({
  title = "Card Title",
  description = "This is card with text overlay",
  style = {}
}) {
  return (
    <div>
      <div className="card with-overlay" style={{ ...style }}>
        <img src="https://loremflickr.com/320/240/animal" alt="card" />
        <div className="overlay">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardWithTextOverlay;
