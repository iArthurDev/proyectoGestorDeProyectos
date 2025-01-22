"use client";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
export default function TaskModalComponent({
  show,
  onClose,
  title,
  tasks,
  setTasks,
}) {
  const [idTask, setIdTask] = useState(tasks.length + 1);
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("backlog");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const newTask = { idTask, priority, description, date };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIdTask((prevIdTask) => (prevIdTask += 1));
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="taskPriority">
            <Form.Label>Prioridad de la tarea</Form.Label>
            <Form.Control
              as="select"
              name="Prioridad"
              defaultValue={priority}
              onChange={handleChangePriority}
            >
              <option value="low">Baja</option>
              <option value="medium-low">Media-Baja</option>
              <option value="medium">Media</option>
              <option value="medium-high">Media-Alta</option>
              <option value="high">Alta</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              type="text"
              name="Descripcion"
              placeholder="Ingrese el nombre de la tarea"
              onChange={handleChangeDescription}
              //value={taskName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDate">
            <Form.Label>Fecha de entrega</Form.Label>
            <Form.Control
              type="date"
              name="Fecha"
              onChange={handleChangeDate}
              //value={taskDate}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
