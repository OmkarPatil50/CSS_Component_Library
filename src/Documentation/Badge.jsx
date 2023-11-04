import "./componentPages.css";
import Badge from "../Components/Badge/Badge";
import { CartIcon } from "../Components/Icons/CartIcon";
import badgeImg from "./CodeBlock/badge.png";

export function BadgeDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Badge Component</h2>
        <p>Badge generates a small badge to the top-right of its child(ren).</p>
      </header>
      <section className="component-demo-view">
        <div className="componentDiv">
          <Badge
            badgeContent={0}
            children=""
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
            showBadge={true}
            vertical="top"
            horizontal="right"
            top={0}
            right={0}
            max={99}
          >
            <CartIcon />
          </Badge>
        </div>
        <div className="componentDiv">
          <Badge
            badgeContent={455}
            children=""
            primaryColor="red"
            secondaryColor="white"
            showBadge={true}
            vertical="top"
            horizontal="left"
            top="-10px"
            left="-10px"
            max={99}
            style={{ margin: "10px" }}
          >
            <CartIcon />
          </Badge>
        </div>
        <div className="componentDiv">
          <Badge
            badgeContent={45}
            children=""
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
            showBadge={true}
            vertical="bottom"
            horizontal="right"
            bottom="-10px"
            right="-10px"
            max={99}
            style={{ margin: "10px" }}
          >
            <CartIcon />
          </Badge>
        </div>
        <div className="componentDiv">
          <Badge
            badgeContent={0}
            children=""
            primaryColor="rgb(25, 118, 210)"
            secondaryColor="white"
            showBadge={true}
            vertical="bottom"
            horizontal="left"
            bottom="-10px"
            left="-10px"
            max={99}
            style={{ margin: "10px" }}
          >
            <i className="fa-solid fa-phone"></i>
          </Badge>
        </div>
      </section>
      <section className="how-to-use">
        <h3>How to use Badge Component</h3>
        <img src={badgeImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
