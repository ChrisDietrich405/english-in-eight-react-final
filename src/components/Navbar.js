import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar bg-light sticky-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ps-5 logo">
          <img
            style={{ width: "70px" }}
            src="/images/logo.svg"
            alt="English in Eight Minutes Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={isCollapsed}
          aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="nounsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isCollapsed}
              >
                Nouns
              </span>
              <ul className="dropdown-menu" aria-labelledby="nounsDropdown">
                <li>
                  <Link
                    to="/noun-categories/noun-definition"
                    className="dropdown-item"
                  >
                    Noun Definition
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/noun-categories/uncountable-and-countable"
                    className="dropdown-item"
                  >
                    Countable & Uncountable Nouns
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/noun-categories/collective"
                    className="dropdown-item"
                  >
                    Collective
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/noun-categories/possessive-pronouns"
                    className="dropdown-item"
                  >
                    Possessive Pronouns
                  </Link>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/noun-categories/noun-modifiers"
                    className="dropdown-item"
                  >
                    Modifiers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="verbsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isCollapsed}
              >
                Verbs
              </span>
              <ul className="dropdown-menu" aria-labelledby="verbsDropdown">
                <li>
                  <Link
                    to="/verbs-definition/verbs-def"
                    className="dropdown-item"
                  >
                    Verbs Definition
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/present-verb-tenses/present-tense"
                    className="dropdown-item"
                  >
                    Present Tense Verbs
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/past-verb-tenses/past-tense"
                    className="dropdown-item"
                  >
                    Past Tense Verbs
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/future-verb-tenses/future-tense"
                    className="dropdown-item"
                  >
                    Future Tense Verbs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="phrasal-verbsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isCollapsed}
              >
                Adjectives
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="phrasal-verbsDropdown"
              >
                <li>
                  <Link
                    to="/adjective-categories/adjective-definition"
                    className="dropdown-item"
                  >
                    Adjectives Definition
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/adjective-categories/possessive-adjectives"
                    className="dropdown-item"
                  >
                    Possessive Adjectives
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/adjective-categories/comparative-adjectives"
                    className="dropdown-item"
                  >
                    Comparative Adjectives
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/adjective-categories/superlative-adjectives"
                    className="dropdown-item"
                  >
                    Superlatives Adjectives
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="expressionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isCollapsed}
              >
                Other Topics
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="expressionsDropdown"
              >
                <li>
                  <Link
                    to="/expressions-categories/expressions-definition"
                    className="dropdown-item"
                  >
                    Idiomatic Expressions
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/phrasal-verbs-categories/phrasal-verbs-definition"
                    className="dropdown-item"
                  >
                    Phrasal Verbs
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/versus-categories/versus-definition"
                    className="dropdown-item"
                  >
                    Versus
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
}
