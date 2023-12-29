import React, { useState } from "react";
import classes from "./CategoryItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Bars } from "react-loader-spinner";

function CategoryItem(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const categoryDeleteHandler = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/v1/category/${props.id}`,
        {
          credentials: "include",
          method: "DELETE",
        }
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
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
      <span>{props.ctg}</span>
      <span className={classes.delete} onClick={categoryDeleteHandler}>
        <RiDeleteBinLine />
      </span>
    </div>
  );
}

export default CategoryItem;
