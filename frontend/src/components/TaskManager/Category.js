import React from "react";
import classes from "./Category.module.css";
import Card from "../../shared/UIElements/Card";
import CategoryItem from "./CategoryItem";
import { Bars } from "react-loader-spinner";

function Category(props) {
  return (
    <Card className={classes.catagory}>
      {props.isLoading && (
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
