import Button from "../Components/Button/Button";
import FloatingButton from "../Components/Button/FloatingButton";
import buttonImg from "./CodeBlock/button.png";

export function ButtonDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Button Component</h2>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </p>
      </header>
      <section className="component-demo-view">
        <div className="componentDiv">
          <Button
            variant="primary"
            disabled={false}
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
          >
            Primary Button
          </Button>
        </div>
        <div className="componentDiv">
          <Button
            text="Outlined Button"
            variant="outlined"
            disabled={false}
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
          />
        </div>
        <div className="componentDiv">
          <Button
            variant="link"
            disabled={false}
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
          >
            Link Button
          </Button>
        </div>
        <div className="componentDiv">
          <h2 className="floating-btn-label">
            This is <span>floating button</span>{" "}
            <i className="fa-solid fa-arrow-down"></i>
          </h2>
          <FloatingButton
            vertical="top"
            horizontal="right"
            top="20%"
            right="0%"
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
          >
            <i className="fa-solid fa-plus"></i>
          </FloatingButton>
        </div>
      </section>
      <section className="how-to-use">
        <h3>How to use Button Component</h3>
        <img src={buttonImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
