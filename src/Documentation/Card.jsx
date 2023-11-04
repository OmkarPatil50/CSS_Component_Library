import { CardWithBadge } from "../Components/Card/CardWithBadge";
import CardWithDismiss from "../Components/Card/CardWithDismiss";
import CardWithTextOverlay from "../Components/Card/CardWithTextOverlay";
import HorizontalCard from "../Components/Card/HorizontalCard";
import TextOnlyCard from "../Components/Card/TextOnlyCard";
import VerticalCard from "../Components/Card/VerticalCard";
import "./componentPages.css";
import cardImg from "./CodeBlock/card.png";

export function CardDoc() {
  return (
    <section className="component-section">
      <header className="component-header">
        <h2>Card Component</h2>
        <p>Cards contain content and actions about a single subject.</p>
      </header>
      <section className="component-demo-view card-component-demo-view">
        <div className="componentDiv">
          <CardWithBadge
            title="Card Title"
            description="This is card with Badge"
            badge="Endangered"
          />
        </div>
        <div className="componentDiv">
          <CardWithDismiss
            title="Card Title"
            description="This is card with Dismiss"
            onClose={() => {
              alert("Function to close card");
            }}
          />
        </div>
        <div className="componentDiv">
          <CardWithTextOverlay
            title="Card Title"
            description="This is card with text overlay"
          />
        </div>
        <div className="componentDiv">
          <TextOnlyCard
            title="Card Title"
            description="This is text only card"
          />
        </div>
        <div className="componentDiv">
          <VerticalCard
            title="Card Title"
            description="This is vertical card"
          />
        </div>
        <div className="componentDiv">
          <HorizontalCard
            title="Card Title"
            description="This is horizontal card"
          />
        </div>
      </section>
      <section className="how-to-use">
        <h3>How to use Card Component</h3>
        <img src={cardImg} alt="code" className="code-image" />
      </section>
    </section>
  );
}
