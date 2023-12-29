import React, { useState } from "react";
import classes from "./Tasks.module.css";
import Card from "../../shared/UIElements/Card";
import TaskItem from "./TaskItem";
import Modal from "../../shared/UIElements/Modal";
import AddTask from "./AddTask";

function Tasks(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal onCloseBackdrop={() => setShowModal(false)}>
          <AddTask
            setShowModal={setShowModal}
            categoryId={props.category}
            categoryName={props.categoryName}
            categoryHandler={props.categoryHandler}
          />
        </Modal>
      )}
      <Card className={classes.tasks}>
        {props.hasCategory && (
          <>
            <h3>your tasks for {props.categoryName}</h3>
            <div className={classes.actionTask}>
              <button
                disabled={props.category === ""}
                onClick={() => setShowModal(true)}
              >
                +
              </button>
            </div>
            {props.taskData.map((task) => (
              <TaskItem
                id={task._id}
                key={task._id}
                task={task.task}
                completed={task.completed}
                categoryId={props.category}
                categoryName={props.categoryName}
                categoryHandler={props.categoryHandler}
              />
            ))}

            {props.taskData.length === 0 && (
              <p>
                You don't have any task yet. First click on a category and later
                add a task by clicking + .
              </p>
            )}
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
