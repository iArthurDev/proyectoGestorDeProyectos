"use client";
import TaskComponent from "@/app/components/ITaskComponent/iTaskComponent";
import "./ToDoStyles.css";
import { useState } from "react";
import TaskModalComponent from "@/app/components/ITaskModalComponent/taskModalComponent";

export default function ToDoComponent({ tasks, setTasks }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="segmento-kanban">
      <h2>Backlog</h2>
      <div className="ToDo-container">
        {tasks.map((task) => (
          <TaskComponent key={task.idTask} task={task} />
        ))}
      </div>
      <button onClick={() => setShowModal(true)}>Nueva tarea</button>

      <TaskModalComponent
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Nueva tarea"
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}
