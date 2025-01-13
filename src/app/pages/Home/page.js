"use client";
import "./homeStyles.css";
import ToDoComponent from "./components/ToDoComponent/todoComponent";
import InProgressComponent from "./components/InProgressComponent/inProgressComponent";
import DoneComponent from "./components/DoneComponent/doneComponent";
import NavbarComponent from "@/app/components/INavbarComponent/navbarComponent";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="home-page">
      <NavbarComponent />
      <div className="contenedor-tablero">
        <div className="columna">
          <ToDoComponent tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="columna">
          <InProgressComponent />
        </div>
        <div className="columna">
          <DoneComponent />
        </div>
      </div>
    </div>
  );
}
