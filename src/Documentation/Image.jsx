import "./componentPages.css";
import imageImg from "./CodeBlock/image.png";
import Image from "../Components/Image/Image";

export function ImageDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Image Component</h2>
        <p>
          Images help improve the visual comprehension of the content they hold.
        </p>
      </header>
      <section className="component-demo-view ">
        <Image
          src="https://loremflickr.com/400/400/animal"
          rounded="true"
          style={{ margin: "20px" }}
        />
        <Image
          src="https://loremflickr.com/400/400/animal"
          responsive="true"
          style={{ margin: "10px" }}
        />
      </section>
      <section className="how-to-use">
        <h3>How to use Image Component</h3>
        <img src={imageImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
