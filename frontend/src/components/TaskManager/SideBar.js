import React, { useState } from "react";
import classes from "./SideBar.module.css";
import Card from "../../shared/UIElements/Card";
import { FaTasks } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

function SideBar() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5000/api/v1/category`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: category }),
      });
      setCategory("");
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  return (
    <div className={classes.sidebar}>
      <Card className={classes.sidebarContent}>
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
