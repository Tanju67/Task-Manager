import React from "react";
import classes from "./CategoryItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

function CategoryItem(props) {
  const categoryDeleteHandler = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/category/${props.id}`,
        {
          credentials: "include",
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log(error);
    }
    props.onClick(props.id, props.categoryName);
  };
  return (
    <div
      onClick={() => props.onClick(props.id, props.ctg)}
      className={`${classes.ctgItem} ${
        props.ctg.trim().toLowerCase() ===
        props.categoryName.trim().toLowerCase()
          ? classes.active
          : ""
      }`}
      id={props.id}
    >
      <span>{props.ctg}</span>
      <span className={classes.delete} onClick={categoryDeleteHandler}>
        <RiDeleteBinLine />
      </span>
    </div>
  );
}

export default CategoryItem;
