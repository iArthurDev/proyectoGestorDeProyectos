"use client";
import "./tableroComponent.css";
import TaskComponent from "@/app/components/ITaskComponent/iTaskComponent";

export default function TableroComponent({ tasks }) {
  return (
    <div className="tablero-container">
      <div className="columnaTablero">
        <div className="segmento-kanban">
          <h2>Backlog</h2>
          <div className="task-container">
            {tasks.map((task) => (
              <TaskComponent key={task.idTask} task={task} />
            ))}
          </div>
        </div>
      </div>
      <div className="columnaTablero">
        <div className="segmento-kanban">
          <h2>In progress</h2>
          <div className="task-container"></div>
        </div>
      </div>
      <div className="columnaTablero">
        <div className="segmento-kanban">
          <h2>Done</h2>
          <div className="task-container"></div>
        </div>
      </div>
    </div>
  );
}
