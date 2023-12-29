import React from "react";
import classes from "./Category.module.css";
import Card from "../../shared/UIElements/Card";
import CategoryItem from "./CategoryItem";

function Category(props) {
  return (
    <Card className={classes.catagory}>
      <h3>CATEGORIES</h3>
      {props.data.map((ctg) => (
        <CategoryItem
          key={ctg._id}
          id={ctg._id}
          category={props.category}
          categoryName={props.categoryName}
          ctg={ctg.category}
          onClick={props.categoryHandler}
        />
      ))}
    </Card>
  );
}

export default Category;
