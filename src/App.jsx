import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./panets/HomePage";
import AboutPage from "./panets/AboutPage";
import ContactPage from "./panets/ContactPage";
import FaqPage from "./panets/FaqPage";
import data from "./starter-code/data.json";

console.log(data);
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>hello Dolly</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}

export default App;
