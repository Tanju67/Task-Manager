import React, { useState } from "react";
import classes from "./SideBar.module.css";
import Card from "../../shared/UIElements/Card";
import { FaTasks } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/v1/category`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: category }),
      });
      setCategory("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.sidebar}>
      <Card className={classes.sidebarContent}>
        <div onClick={() => navigate("/")} className={classes.icon}>
          <FaTasks />
        </div>

        <h3>Add Task Category</h3>
        <form onSubmit={submitHandler}>
          <div className={classes.formControl}>
            <input
              value={category}
              type="text"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.action}>
            <button>Add</button>
          </div>
        </form>
        <button
          type="submit"
          className={classes.backBtn}
          onClick={() => navigate("/")}
        >
          <AiOutlineHome />
        </button>
      </Card>
    </div>
  );
}

export default SideBar;
