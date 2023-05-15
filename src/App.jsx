import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Planents from "./panets/Planents";
import PlanetMenu from "./panets/PlanetMenu";
import hamburgerIcon from "../public/assets/icon-hamburger.svg";
import "./panets/PlanetMenu.css";

import planetData from "./data.json";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = windowWidth < 1000;

  return (
    <div className="App">
      <header>
        <h1>the planets</h1>

        {isMobile && (
          <button className="burger-menu" onClick={toggleMenu}>
            <img src={hamburgerIcon} alt="Menu" />
          </button>
        )}
        {menuOpen && <PlanetMenu />}

        <nav style={{ display: isMobile ? "none" : "block" }}>
          <ul>
            {planetData.map((planet) => (
              <li className="nav-planet-names" key={planet.name}>
                <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/planets/Mercury" />} />
        <Route path="/planets/:name" element={<Planents />} />
      </Routes>
    </div>
  );
}

export default App;
