import "./Card.css";
export function TextOnlyCard({
  title = "Card Title",
  description = "This is text only card",
  style = {}
}) {
  return (
    <div>
      <div className="card text-only-card" style={{ ...style }}>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TextOnlyCard;
