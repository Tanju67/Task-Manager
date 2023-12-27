import React, { useState } from "react";
import classes from "./TaskItem.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "../../shared/UIElements/Modal";
import EditTask from "./EditTask";

function TaskItem(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal onCloseBackdrop={() => setShowModal(false)}>
          <EditTask
            setShowModal={setShowModal}
            task={props.task}
            completed={props.completed}
            id={props.id}
          />
        </Modal>
      )}
      <div className={classes.taskItem} id={props.id}>
        <div>{props.task}</div>
        <div className={classes.taskIcon}>
          <span className={classes.edit} onClick={() => setShowModal(true)}>
            <FiEdit />
          </span>
          <span className={classes.delete}>
            <RiDeleteBinLine />
          </span>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
