import React, { useEffect, useState } from "react";
import classes from "./TaskManager.module.css";
import Card from "../../shared/UIElements/Card";
import SideBar from "./SideBar";
import Content from "./Content";

function TaskManager() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/category`, {
        credentials: "include",
      });
      const data = await res.json();

      setCategoryData(data.category);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>TASK MANAGER</h1>
      </div>
      <Card className={classes.taskManager}>
        <SideBar getCategoryData={getCategoryData} />
        <Content
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          error={error}
          categoryData={categoryData}
          getCategoryData={getCategoryData}
        />
      </Card>
    </div>
  );
}

export default TaskManager;
