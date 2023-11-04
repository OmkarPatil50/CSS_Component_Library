import styles from "./avatar.module.css";

export function Avatar({
  imageSrc = "https://loremflickr.com/320/240/man",
  imageAlt = "image",
  size = "medium",
  onClick,
  style = {}
}) {
  const avatarStyles = {
    small: {
      width: "40px",
      height: "40px"
    },
    medium: {
      width: "60px",
      height: "60px"
    },
    large: {
      width: "80px",
      height: "80px"
    }
  };
  return (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={styles.avatar}
      onClick={onClick}
      style={{
        ...avatarStyles[size],
        ...style
      }}
    />
  );
}

export default Avatar;
