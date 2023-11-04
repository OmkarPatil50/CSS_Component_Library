import "./componentPages.css";
import textImg from "./CodeBlock/text.png";
import Text from "../Components/Text/Text";

export function TextDoc() {
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
        <Text fz="xs">Extra small text</Text>
        <Text fz="sm">Small text</Text>
        <Text fz="md">Default text</Text>
        <Text fz="lg">Large text</Text>
        <Text fz="xl">Extra large text</Text>
        <Text fw={500}>Semibold</Text>
        <Text fw={700}>Bold</Text>
        <Text fs="italic">Italic</Text>
        <Text td="underline">Underlined</Text>
        <Text td="line-through">Strikethrough</Text>
        <Text c="#696969">Dimmed text</Text>
        <Text c="blue">Blue text</Text>
        <Text c="#008080">Teal 4 text</Text>
        <Text tt="uppercase">Uppercase</Text>
        <Text tt="capitalize">capitalized text</Text>
        <Text ta="center">Aligned to center</Text>
        <Text ta="right">Aligned to right</Text>
      </section>
      <section className="how-to-use">
        <h3>How to use Headings Component</h3>
        <img src={textImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
