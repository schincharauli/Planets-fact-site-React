import React, { useState } from "react";
import { useParams } from "react-router-dom";
import planetData from "../data.json";
import "../App.css";

export default function Planets() {
  const { name } = useParams();
  const planet = planetData.find((planet) => planet.name === name);
  const [showInternalImage, setShowInternalImage] = useState(false);
  const [showGeologyImage, setShowGeologyImage] = useState(false);

  const handleInternalClick = () => {
    setShowInternalImage(!showInternalImage);
    setShowGeologyImage(false);
  };

  const handleGeologyClick = () => {
    setShowGeologyImage(!showGeologyImage);
    setShowInternalImage(false);
  };

  return (
    <div className="planet">
      <h2>{planet.name}</h2>
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
      <p>{planet.overview.content}</p>
      <p>
        Source:{" "}
        <a href={planet.geology.source} target="_blank" rel="noreferrer">
          Wikipedia
        </a>
      </p>
      <button onClick={handleInternalClick}>Internal Structure</button>
      <button onClick={handleGeologyClick}>Surface Geology</button>
      <button
        onClick={() => {
          setShowInternalImage(false);
          setShowGeologyImage(false);
        }}
      >
        Show planet
      </button>
    </div>
  );
}
