import "./Card.css";
export function CardWithBadge({
  title = "Card Title",
  description = "This is card with Badge",
  badge = "Endangered",
  style = {}
}) {
  return (
    <div>
      <div className="card with-badge" style={{ ...style }}>
        <img src="https://loremflickr.com/320/240/animal" alt="card" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
        <span className="badge">{badge}</span>
      </div>
    </div>
  );
}

export default CardWithBadge;
