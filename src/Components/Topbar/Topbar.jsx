import React, { useState } from "react";
import "./Topbar.css";
import { useLocation, Link } from "react-router-dom";

function Topbar() {
  const componentsArray = [
    "Alert",
    "Avatar",
    "Badge",
    "Button",
    "Card",
    "Heading",
    "Image",
    "Text"
  ];

  const [searchText, setSearchText] = useState("");

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <p className="top-bar-app-info">
          <i className="fa-solid fa-code"></i>
        </p>
        <p className="top-bar-app-name">Omkar's CSS Library</p>
      </div>

      <div className="top-bar-center">
        <label htmlFor="search-component" className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="search-bar-input"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>
        {searchText.length ? (
          <section className="search-results-section">
            <ul>
              {componentsArray
                .filter((comp) =>
                  comp.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((result) => {
                  return (
                    <Link to={`/${result.toLowerCase()}`} className="link">
                      <li className="search-list-item">{result}</li>
                    </Link>
                  );
                })}
            </ul>
          </section>
        ) : (
          ""
        )}
      </div>

      <div className="top-bar-right">
        <Link to="/" className="link">
          <button className="btn-top-bar-right">
            <i className="fa-solid fa-home"></i> Home
          </button>
        </Link>
        <Link to="/components" className="link">
          <button className="btn-top-bar-right">
            <i className="fa-solid fa-brush"></i> Components
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
