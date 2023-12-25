import React from "react";
import classes from "./SideBar.module.css";
import Card from "../../shared/UIElements/Card";
import { FaTasks } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className={classes.sidebar}>
      <Card className={classes.sidebarContent}>
        <div onClick={() => navigate("/")} className={classes.icon}>
          <FaTasks />
        </div>

        <h3>Add Task Category</h3>
        <form>
          <div className={classes.formControl}>
            <input type="text" />
          </div>
          <div className={classes.action}>
            <button>Add</button>
          </div>
        </form>
        <button className={classes.backBtn} onClick={() => navigate("/")}>
          <AiOutlineHome />
        </button>
      </Card>
    </div>
  );
}

export default SideBar;
