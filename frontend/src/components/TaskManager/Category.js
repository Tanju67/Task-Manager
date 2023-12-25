import React from "react";
import classes from "./Category.module.css";
import Card from "../../shared/UIElements/Card";
import CategoryItem from "./CategoryItem";

function Category(props) {
  console.log(props);
  return (
    <Card className={classes.catagory}>
      <h3>CATEGORIES</h3>
      {props.data.map((ctg) => (
        <CategoryItem
          key={ctg.id}
          id={ctg.id}
          category={props.category}
          ctg={ctg.category}
          onClick={props.categoryHandler}
        />
      ))}
    </Card>
  );
}

export default Category;
