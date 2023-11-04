export function Text({
  text = "Text",
  fz,
  fw,
  fs,
  td,
  c,
  tt,
  ta,
  style = {},
  children = ""
}) {
  const textStyle = {
    fontSize:
      fz === "xs"
        ? "10px"
        : fz === "sm"
        ? "14px"
        : fz === "md"
        ? "16px"
        : fz === "lg"
        ? "24px"
        : fz === "xl"
        ? "30px"
        : "20px",
    fontWeight: `${fw}`,
    fontStyle: `${fs}`,
    textDecoration: `${td}`,
    color: `${c}`,
    textTransform: `${tt}`,
    textAlign: `${ta}`
  };
  return <p style={{ ...textStyle, ...style }}>{children || text}</p>;
}

export default Text;
