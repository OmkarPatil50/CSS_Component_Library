import "./componentPages.css";
import headingImg from "./CodeBlock/heading.png";
import Heading from "../Components/Heading/Heading";

export function HeadingDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Heading Component</h2>
        <p>
          {" "}
          Headings are signposts that help you structure longer pieces of
          writing and allow the reader easily navigate their way around a
          document.
        </p>
      </header>
      <section className="component-demo-view ">
        <Heading text="h1.Heading" variant="h1" style={{ color: "red" }} />
        <Heading variant="h2" style={{ color: "blue" }}>
          h2.Heading
        </Heading>
        <Heading text="h3.Heading" variant="h3" style={{ color: "yellow" }} />
        <Heading variant="h4" style={{ color: "orange" }}>
          h4.Heading
        </Heading>
        <Heading text="h5.Heading" variant="h5" style={{ color: "pink" }} />
        <Heading text="h6.Heading" variant="h6" />
      </section>
      <section className="how-to-use">
        <h3>How to use Headings Component</h3>
        <img src={headingImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
