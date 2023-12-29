import React, { useState } from "react";
import classes from "./EditTask.module.css";

function EditTask(props) {
  const [task, setTask] = useState(props.task);
  const [checked, setChecked] = useState(props.completed);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/v1/task/${props.id}`, {
        credentials: "include",
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task, completed: checked }),
      });
    } catch (error) {
      console.log(error);
    }
    props.categoryHandler(props.categoryId, props.categoryName);
    props.setShowModal(false);
  };
  return (
    <div className={classes.editTask}>
      <span onClick={() => props.setShowModal(false)}>x</span>
      <h3>Edit Your Task</h3>
      <form onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label>Task:</label>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
          />
        </div>
        <div className={`${classes.formControl} ${classes.checkControl} `}>
          <label>Completed:</label>
          <input
            onChange={(e) => setChecked((prev) => !prev)}
            type="checkbox"
            checked={checked}
            className={classes.checkbox}
          />
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

export default EditTask;
