import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import planetData from "../data.json";
import PlanetMenu from "./PlanetMenu";
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

  const isMediumScreen = windowWidth >= 375 && windowWidth <= 768;

  return (
    <div className="planet">
      <div className="section-one">
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
          <div
            className="active-color"
            style={{
              backgroundColor: planet.color,
              height: "4px",
              width: "80px",
            }}
          ></div>

          <button onClick={handleInternalClick}>
            <span>02</span>
            {isMediumScreen ? "Structure" : "Internal Structure"}
          </button>
          <div
            className="active-color"
            style={{
              backgroundColor: planet.color,
              height: "4px",
              width: "80px",
            }}
          ></div>
          <button onClick={handleGeologyClick}>
            <span>03</span>
            {isMediumScreen ? "Surface" : "Surface Geology"}
          </button>
          <div
            className="active-color"
            style={{
              backgroundColor: planet.color,
              height: "4px",
              width: "80px",
            }}
          ></div>
        </div>
        <div className="tablet-design">
          <h2>{planet.name}</h2>
          <p className="overview">{planet.overview.content}</p>

          <p className="source">
            Source:{" "}
            <a href={planet.geology.source} target="_blank" rel="noreferrer">
              <p> Wikipedia</p>
            </a>
          </p>
        </div>
      </div>

      <div className="section-two">
        <div className="planet-image-container">
          <img
            className={`planet-image ${
              showGeologyImage ? "show-geology" : ""
            } ${showInternalImage ? "show-internal" : ""}`}
            src={planet.images.planet}
            alt={planet.name}
          />
          {showGeologyImage && (
            <img
              className="geology-image"
              src={planet.images.geology}
              alt={`${planet.name} geology`}
            />
          )}
          {showInternalImage && (
            <img
              className="internal-image"
              src={planet.images.internal}
              alt={`${planet.name} internal structure`}
            />
          )}
        </div>
      </div>

      <div className="tablet-size-boxes">
        <div className="box-one-tablet-size">
          <div className="details">
            <p className="txt">ROTATION TIME </p>

            <p className="desc">{planet.rotation}</p>
          </div>
          <div className="details">
            <p className="txt">REVOLUTION TIME </p>
            <p className="desc">{planet.revolution}</p>
          </div>
        </div>

        <div className="box-two-tablet-size">
          <div className="details">
            <p className="txt">RADIUS </p>
            <p className="desc"> {planet.radius}</p>
          </div>
          <div className="details">
            <p className="txt">AVERAGE TEMP </p>
            <p className="desc">{planet.temperature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
