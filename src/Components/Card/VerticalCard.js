import "./Card.css";
export function VerticalCard({
  title = "Card Title",
  description = "This is vertical card",
  style = {}
}) {
  return (
    <div>
      <div className="card vertical-card" style={{ ...style }}>
        <img src="https://loremflickr.com/320/240/animal" alt="Card" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
