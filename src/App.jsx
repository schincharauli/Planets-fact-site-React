import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./panets/HomePage";
import Planents from "./panets/Planents";

import planetData from "./starter-code/data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            {planetData.map((planet) => (
              <li key={planet.name}>
                <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />
        <Route path="/planets/:name" element={Planents} />
      </Routes>
    </div>
  );
}

export default App;
