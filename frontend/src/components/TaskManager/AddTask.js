import React, { useState } from "react";
import classes from "./AddTask.module.css";

import { Bars } from "react-loader-spinner";

function AddTask(props) {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch(`http://localhost:5000/api/v1/task/${props.categoryId}`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task }),
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
    props.categoryHandler(props.categoryId, props.categoryName);
    props.setShowModal(false);
  };
  return (
    <div className={classes.addTask}>
      {isLoading && (
        <Bars
          height="30"
          width="30"
          color="coral"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass={classes.bars}
          visible={true}
        />
      )}
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
