import React, { useState } from "react";
import classes from "./Tasks.module.css";
import Card from "../../shared/UIElements/Card";
import TaskItem from "./TaskItem";
import Modal from "../../shared/UIElements/Modal";
import AddTask from "./AddTask";

const tasks = [
  {
    id: "t1",
    task: "Read a book",
    completed: false,
    category: "homework",
  },
  {
    id: "t2",
    task: "Read a book",
    completed: false,
    category: "homework",
  },
];

function Tasks(props) {
  const [showModal, setShowModal] = useState(false);
  const filteredTask = tasks.filter(
    (task) =>
      task.category.trim().toLowerCase() === props.category.trim().toLowerCase()
  );

  return (
    <>
      {showModal && (
        <Modal onCloseBackdrop={() => setShowModal(false)}>
          <AddTask setShowModal={setShowModal} />
        </Modal>
      )}
      <Card className={classes.tasks}>
        {props.hasCategory && (
          <>
            <h3>your tasks for {props.category}</h3>
            <div className={classes.actionTask}>
              <button onClick={() => setShowModal(true)}>+</button>
            </div>
            {filteredTask.map((task) => (
              <TaskItem id={task.id} key={task.id} task={task.task} />
            ))}

            {filteredTask.length === 0 && <p>You don't have any task yet.</p>}
          </>
        )}
        {!props.hasCategory && (
          <>
            <h3>your tasks </h3>
            <p>You have to add first a category in order to add tasks.</p>
          </>
        )}
      </Card>
    </>
  );
}

export default Tasks;
