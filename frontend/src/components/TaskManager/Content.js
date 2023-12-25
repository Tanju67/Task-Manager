import React, { useState } from "react";
import classes from "./Content.module.css";

import Category from "./Category";
import Tasks from "./Tasks";
const categoryData = [
  { id: "c1", category: "Homework" },
  { id: "c2", category: "Cleaning" },
];

function Content() {
  const [category, setCategory] = useState("");

  const categoryHandler = (ctg) => {
    setCategory(ctg);
  };
  return (
    <div className={classes.content}>
      <Category
        categoryHandler={categoryHandler}
        category={category}
        data={categoryData}
      />
      <Tasks category={category} hasCategory={categoryData.length > 0} />
    </div>
  );
}

export default Content;
