import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import planetData from "../data.json";
import "../App.css";

export default function Planets() {
  const { name } = useParams();
  const planet = planetData.find((planet) => planet.name === name);
  const [showInternalImage, setShowInternalImage] = useState(false);
  const [showGeologyImage, setShowGeologyImage] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInternalClick = () => {
    setShowInternalImage(!showInternalImage);
    setShowGeologyImage(false);
  };

  const handleGeologyClick = () => {
    setShowGeologyImage(!showGeologyImage);
    setShowInternalImage(false);
  };

  const isMediumScreen = (windowWidth) => 375 && windowWidth <= 768;

  return (
    <div className="planet">
      <div className="buttons">
        <button
          onClick={() => {
            setShowInternalImage(false);
            setShowGeologyImage(false);
          }}
        >
          <span>01</span>
          OVERVIEW
        </button>

        <button onClick={handleInternalClick}>
          <span>02</span>
          {isMediumScreen ? "Structure" : "Internal Structure"}
        </button>
        <button onClick={handleGeologyClick}>
          <span>03</span>
          {isMediumScreen ? "Surface" : "Surface Geology"}
        </button>
      </div>
      <img
        src={
          showGeologyImage
            ? planet.images.geology
            : showInternalImage
            ? planet.images.internal
            : planet.images.planet
        }
        alt={planet.name}
      />
      <h2>{planet.name}</h2>
      <p>{planet.overview.content}</p>

      <p>
        Source:{" "}
        <a href={planet.geology.source} target="_blank" rel="noreferrer">
          Wikipedia
        </a>
      </p>

      <p>ROTATION TIME {planet.rotation}</p>
      <p>REVOLUTION TIME {planet.revolution}</p>
      <p>RADIUS {planet.radius}</p>
      <p>AVERAGE TEMP {planet.temperature}</p>
    </div>
  );
}
