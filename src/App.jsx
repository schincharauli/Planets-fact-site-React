import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./panets/HomePage";
import AboutPage from "./panets/AboutPage";
import ContactPage from "./panets/ContactPage";
import FaqPage from "./panets/FaqPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="fac" element={<FaqPage />} />
    </Routes>
  );
}

export default App;
