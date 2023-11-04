export function Image({
  src = "https://loremflickr.com/320/240/animal",
  width = "100px",
  height = "100px",
  responsive = false,
  rounded = false,
  style = {}
}) {
  const responsiveStyle = responsive
    ? {
        width: `${width}`,
        maxWidth: "80%",
        height: "auto"
      }
    : "";
  const roundedStyle = rounded
    ? {
        boxSizing: "border-box",
        borderRadius: "50%",
        overflow: "hidden"
      }
    : "";
  return (
    <img
      src={src}
      alt="input"
      style={{ ...responsiveStyle, ...roundedStyle, ...style }}
    />
  );
}

export default Image;
