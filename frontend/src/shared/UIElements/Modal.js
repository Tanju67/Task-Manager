import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

function ModalOverlay(props) {
  const content = <div className={classes.modal}>{props.children}</div>;
  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-hook")
  );
}

function Modal(props) {
  return (
    <>
      <Backdrop onClick={props.onCloseBackdrop} />
      <ModalOverlay {...props} />
    </>
  );
}

export default Modal;
