export function Heading({
  children = "",
  text = "Heading",
  variant = "h1",
  style = {}
}) {
  const headingStyles = {
    h1: {
      fontSize: "34px"
    },
    h2: {
      fontSize: "30px"
    },
    h3: {
      fontSize: "24px"
    },
    h4: {
      fontSize: "20px"
    },
    h5: {
      fontSize: "18px"
    },
    h6: {
      fontSize: "16px"
    }
  };
  return (
    <p style={{ ...headingStyles[variant], ...style }}>{children || text}</p>
  );
}

export default Heading;
