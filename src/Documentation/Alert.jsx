import Alert from "../Components/Alert/Alert";
import "./componentPages.css";
import alertImg from "./CodeBlock/alert.png";

export function AlertDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Alert Component</h2>
        <p>
          An alert displays a short, important message in a way that attracts
          the user's attention without interrupting the user's task.
        </p>
      </header>
      <section className="component-demo-view">
        <Alert text="This is Success alert" onOpen={true} severity="success" />
        <Alert text="This is Warning alert" onOpen={true} severity="warning" />
        <Alert text="This is Info alert" onOpen={true} severity="info" />
        <Alert text="This is Error alert" onOpen={true} severity="error" />
      </section>
      <section className="how-to-use">
        <h3>How to use Alert Component</h3>
        <img src={alertImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
