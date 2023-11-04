import Avatar from "../Components/Avatar/Avatar";
import "./componentPages.css";
import avatarImg from "./CodeBlock/avatar.png";

export function AvatarDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Avatar Component</h2>
        <p>
          The Avatar component displays an image representing a user or entity,
          along with a name
        </p>
      </header>
      <section className="component-demo-view">
        <Avatar
          imageAlt="hero"
          imageSrc="https://loremflickr.com/320/240/boy"
          size="small"
          style={{ margin: "10px" }}
        />
        <Avatar
          imageAlt="hero"
          imageSrc="https://loremflickr.com/320/240/boy"
          size="medium"
          style={{ margin: "10px" }}
        />
        <Avatar
          imageAlt="hero"
          imageSrc="https://loremflickr.com/320/240/boy"
          size="large"
          style={{ margin: "10px" }}
        />
      </section>
      <section className="how-to-use">
        <h3>How to use Avatar Component</h3>
        <img src={avatarImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
