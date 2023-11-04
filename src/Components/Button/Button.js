import styles from "./button.module.css";

export function Button({
  text = "",
  children = "",
  variant = "primary",
  onClick = () => {},
  disabled = false,
  style = {},
  primaryColor = "rgb(25, 118, 210)",
  secondaryColor = "white"
}) {
  const btnStyles = {
    primary: {
      backgroundColor: `${primaryColor}`,
      color: `${secondaryColor}`
    },
    outlined: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: `${primaryColor}`,
      backgroundColor: `${secondaryColor}`,
      color: `${primaryColor}`
    },
    link: {
      color: `${primaryColor}`,
      borderColor: "0px none",
      backgroundColor: `${secondaryColor}`,
      textDecoration: "underline"
    },
    icon: {
      borderColor: "none",
      backgroundColor: `${secondaryColor}`,
      color: `${primaryColor}`
    }
  };
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      style={{
        ...btnStyles[variant],
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

export default Button;
