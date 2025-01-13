"use Client";
import "./taskStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEraser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function TaskComponent({ task }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".svg-inline--fa").forEach((icon) => {
      icon.style.fontSize = "15px";
    });
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="task">
      <div className="task-menu">
        <div className="container-button-openMenu">
          <button className="btn-openMenu" onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/*Se muestra el menu al hacer click en el boton */}
        {showMenu && (
          <div className="menu-options">
            <button className="btn-menu btn-edit">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="btn-menu btn-delete">
              <FontAwesomeIcon icon={faEraser} />
            </button>
          </div>
        )}
      </div>

      <div className="container-task-details">
        <div className="container-task-priority">
          <div className={`task-priority ${task.priority}`}></div>
        </div>
        <div className="container-task-info">
          <div className="task-details">
            <p>{task.description}</p>
          </div>
          <div className="more-details">
            <div className="container-task-responsables">LD</div>
            <div className="container-task-date">{task.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
