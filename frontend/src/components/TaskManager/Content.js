import React, { useEffect, useState } from "react";
import classes from "./Content.module.css";

import Category from "./Category";
import Tasks from "./Tasks";

function Content() {
  const [categoryId, setCategoryId] = useState("");
  const [catagoryName, setCategoryName] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryTasksData, setCategoryTasksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(categoryTasksData);

  useEffect(() => {
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
    getCategoryData();
  }, []);

  const categoryHandler = async (ctg, ctgName) => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5000/api/v1/task/${ctg}`, {
        credentials: "include",
      });

      const data = await res.json();
      console.log(data.taskObj);

      setCategoryTasksData(data.taskObj);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
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
        data={categoryData}
        isLoading={isLoading}
      />
      <Tasks
        category={categoryId}
        categoryHandler={categoryHandler}
        categoryName={catagoryName}
        hasCategory={categoryData.length > 0}
        taskData={categoryTasksData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Content;
