import styles from "./button.module.css";

export function FloatingButton({
  text = "",
  children = "",
  onClick = () => {},
  disabled = false,
  vertical = "top",
  horizontal = "right",
  top,
  bottom,
  left,
  right,
  style = {},
  primaryColor = "rgb(25, 118, 210)",
  secondaryColor = "white"
}) {
  const btnStyles = {
    position: "fixed",
    top: vertical === "top" ? `${top}` : "",
    bottom: vertical === "bottom" ? `${bottom}` : "",
    left: horizontal === "left" ? `${left}` : "",
    right: horizontal === "right" ? `${right}` : "",
    margin: "20px",
    color: `${secondaryColor}`,
    backgroundColor: `${primaryColor}`,
    borderColor: "none",
    padding: "18.5px 20px",
    borderRadius: "50%",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.7)"
  };
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      style={{
        ...btnStyles,
        ...style,
        ...(disabled
          ? {
              backgroundColor: "gray",
              borderColor: "gray",
              color: "white",
              opacity: 0.5
            }
          : {})
      }}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
}

export default FloatingButton;
