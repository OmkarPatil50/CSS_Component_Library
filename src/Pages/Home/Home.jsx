import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <div>
      <main className="home-page flex-center">
        <section className="hero-section flex-center">
          <h1 className="hero-heading">Unique Component Library</h1>
          <p className="hero-description">
            Collection of innovative components for modern web development
          </p>
          <Link to="/components" className="link">
            <button className="hero-btn">Get Started</button>
          </Link>
        </section>
      </main>
    </div>
  );
}
