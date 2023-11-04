import styles from "./badge.module.css";

export function Badge({
  badgeContent = 0,
  children = "",
  primaryColor = "rgb(25, 118, 210)",
  secondaryColor = "white",
  onClick,
  showBadge = true,
  vertical = "top",
  horizontal = "right",
  max = 99,
  top,
  bottom,
  left,
  right,
  style = {}
}) {
  const badgeStyles = {
    backgroundColor: `${primaryColor}`,
    color: `${secondaryColor}`,
    top: vertical === "top" ? `${top}` : "",
    bottom: vertical === "bottom" ? `${bottom}` : "",
    left: horizontal === "left" ? `${left}` : "",
    right: horizontal === "right" ? `${right}` : ""
  };
  return (
    <div className={styles.badgeDiv}>
      <button className={styles.badge} onClick={onClick}>
        {children}
      </button>
      {showBadge && (
        <p
          className={styles.badgeContent}
          style={{
            ...badgeStyles,
            ...style
          }}
        >
          {badgeContent > max ? "99+" : badgeContent}
        </p>
      )}
    </div>
  );
}

export default Badge;
