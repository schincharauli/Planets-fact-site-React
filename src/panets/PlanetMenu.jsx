import { Link } from "react-router-dom";
import planetData from "../data.json";
import style from "./PlanetMenu.css";

function PlanetMenu({ toggleMenu }) {
  return (
    <ul className={style["planet-menu"]}>
      {planetData.map((planet) => (
        <li className={style["planet-menu-item"]} key={planet.name}>
          <Link to={`/planets/${planet.name}`} onClick={toggleMenu}>
            {planet.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PlanetMenu;
