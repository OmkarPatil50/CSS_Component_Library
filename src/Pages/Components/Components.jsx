import { Link } from "react-router-dom";
import "./Components.css";
import { componentsArray } from "../../App";

export function Components() {
  return (
    <div>
      <main className="main-page">
        <h2 className="page-heading">All Components</h2>
        <ul className="components-list">
          {componentsArray.map((comp) => {
            return (
              <Link className="link" to={`/${comp.toLowerCase()}`}>
                <li className="component-box">
                  <span>{comp}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
