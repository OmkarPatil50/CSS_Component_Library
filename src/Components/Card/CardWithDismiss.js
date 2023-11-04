import "./Card.css";
export function CardWithDismiss({
  title = "Card Title",
  description = "This is card with Dismiss",
  style = {},
  onClose = () => {}
}) {
  return (
    <div>
      <div className="card with-dismiss" style={{ ...style }}>
        <img src="https://loremflickr.com/320/240/animal" alt="card" />
        <button className="dismiss-button" onClick={onClose}>
          ×
        </button>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardWithDismiss;
