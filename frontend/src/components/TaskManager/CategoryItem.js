import React from "react";
import classes from "./CategoryItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

function CategoryItem(props) {
  return (
    <div
      onClick={() => props.onClick(props.ctg)}
      className={`${classes.ctgItem} ${
        props.ctg.trim().toLowerCase() === props.category.trim().toLowerCase()
          ? classes.active
          : ""
      }`}
      id={props.id}
    >
      <span>{props.ctg}</span>
      <RiDeleteBinLine />
    </div>
  );
}

export default CategoryItem;
