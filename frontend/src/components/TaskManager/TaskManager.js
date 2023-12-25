import React from "react";
import classes from "./TaskManager.module.css";
import Card from "../../shared/UIElements/Card";
import SideBar from "./SideBar";
import Content from "./Content";

function TaskManager() {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>TASK MANAGER</h1>
      </div>
      <Card className={classes.taskManager}>
        <SideBar />
        <Content />
      </Card>
    </div>
  );
}

export default TaskManager;
