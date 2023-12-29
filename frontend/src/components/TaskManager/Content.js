import React, { useEffect, useState } from "react";
import classes from "./Content.module.css";

import Category from "./Category";
import Tasks from "./Tasks";

function Content(props) {
  const [categoryId, setCategoryId] = useState("");
  const [catagoryName, setCategoryName] = useState("");

  const [categoryTasksData, setCategoryTasksData] = useState([]);

  const categoryHandler = async (ctg, ctgName) => {
    try {
      props.setIsLoading(true);
      const res = await fetch(`http://localhost:5000/api/v1/task/${ctg}`, {
        credentials: "include",
      });

      const data = await res.json();

      setCategoryTasksData(data.taskObj);
      props.setIsLoading(false);
    } catch (error) {
      props.setError(error);
      props.setIsLoading(false);
    }
    setCategoryId(ctg);
    setCategoryName(ctgName);
  };

  return (
    <div className={classes.content}>
      <Category
        categoryHandler={categoryHandler}
        category={categoryId}
        categoryName={catagoryName}
        data={props.categoryData}
        isLoading={props.isLoading}
        getCategoryData={props.getCategoryData}
      />
      <Tasks
        category={categoryId}
        categoryHandler={categoryHandler}
        categoryName={catagoryName}
        hasCategory={props.categoryData.length > 0}
        taskData={categoryTasksData}
        isLoading={props.isLoading}
      />
    </div>
  );
}

export default Content;
