import { Link } from "react-router-dom";
import planetData from "../data.json";
import style from "./PlanetMenu.css";

function PlanetMenu({ toggleMenu, selectedPlanetName }) {
  const getCircleColor = (name) => {
    const colorMap = {
      Mercury: "#DEF4FC",
      Venus: "#F7CC7F",
      Earth: "#545BFE",
      Mars: "#FF6A45",
      Jupiter: "#ECAD7A",
      Saturn: "#FCCB6B",
      Uranus: "#65F0D5",
      Neptune: "#497EFA",
    };

    return colorMap[name] || "gray";
  };

  return (
    <>
      <ul className={style["planet-menu"]}>
        {planetData.map((planet) => (
          <div className="navigation">
            <div className="list">
              <div
                className="planet-color-circles"
                style={{ background: getCircleColor(planet.name) }}
              ></div>

              <li className={style["planet-menu-item"]} key={planet.name}>
                <Link
                  to={`/planets/${planet.name}`}
                  onClick={() => {
                    toggleMenu();
                    props.toggleMenu();
                  }}
                >
                  {planet.name}
                </Link>
              </li>
            </div>
            <div className="hr-planets"></div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default PlanetMenu;
