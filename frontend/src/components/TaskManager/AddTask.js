import React, { useState } from "react";
import classes from "./AddTask.module.css";

function AddTask(props) {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.setShowModal(false);
  };
  return (
    <div className={classes.addTask}>
      <span onClick={() => props.setShowModal(false)}>x</span>
      <h3>Add Your Task</h3>
      <form onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <input onChange={(e) => setTask(e.target.value)} type="text" />
        </div>
        <div className={classes.action}>
          <button type="submit" disabled={task.length === 0}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
