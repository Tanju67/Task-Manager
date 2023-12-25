import React from "react";
import classes from "./TaskItem.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function TaskItem(props) {
  return (
    <div className={classes.taskItem} id={props.id}>
      <div>{props.task}</div>
      <div className={classes.taskIcon}>
        <span className={classes.edit}>
          <FiEdit />
        </span>
        <span className={classes.delete}>
          <RiDeleteBinLine />
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
