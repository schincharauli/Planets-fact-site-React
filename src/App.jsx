import { useState } from "react";
import viteLogo from "/vite.svg";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./panets/HomePage";
import Planents from "./panets/Planents";

import planetData from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>the planets</h1>
        <nav>
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
