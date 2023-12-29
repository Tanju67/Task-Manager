import React, { useState } from "react";
import classes from "./TaskItem.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "../../shared/UIElements/Modal";
import EditTask from "./EditTask";

function TaskItem(props) {
  const [showModal, setShowModal] = useState(false);
  console.log(props);

  const taskEditHandler = async () => {
    setShowModal(true);
  };

  const taskDeleteHandler = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/task/${props.id}`, {
        credentials: "include",
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    props.categoryHandler(props.categoryId, props.categoryName);
  };

  return (
    <>
      {showModal && (
        <Modal onCloseBackdrop={() => setShowModal(false)}>
          <EditTask
            setShowModal={setShowModal}
            task={props.task}
            completed={props.completed}
            id={props.id}
            categoryId={props.categoryId}
            categoryName={props.categoryName}
            categoryHandler={props.categoryHandler}
          />
        </Modal>
      )}
      <div
        className={`${classes.taskItem} ${
          props.completed ? classes.completed : ""
        }`}
        id={props.id}
      >
        <div>{props.task}</div>
        <div className={classes.taskIcon}>
          <span className={classes.edit} onClick={taskEditHandler}>
            <FiEdit />
          </span>
          <span className={classes.delete} onClick={taskDeleteHandler}>
            <RiDeleteBinLine />
          </span>
        </div>
        {props.completed && <h2 className={classes.completedMsg}>COMPLETED</h2>}
      </div>
    </>
  );
}

export default TaskItem;
