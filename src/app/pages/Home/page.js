"use client";
import "./homeStyles.css";
import ToDoComponent from "./components/ToDoComponent/todoComponent";
import NavbarComponent from "@/app/components/INavbarComponent/navbarComponent";
import TaskModalComponent from "@/app/components/ITaskModalComponent/taskModalComponent";

import { useState } from "react";
import TableroComponent from "./components/tableroComponent/tableroComponent";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const updateTaskStatus = (idTask, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.idTask === idTask ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="home-page">
      <NavbarComponent />
      <div className="nueva-tarea">
        <button onClick={() => setShowModal(true)}>Nueva tarea</button>
      </div>
      {/*Componentes del tablero */}
      <div className="contenedor-tablero">
        <TableroComponent tasks={tasks} updateTaskStatus={updateTaskStatus} />
      </div>

      <TaskModalComponent
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Nueva tarea"
        tasks={tasks}
        setTasks={setTasks}
      />
      {/*Componentes del tablero */}
    </div>
  );
}
