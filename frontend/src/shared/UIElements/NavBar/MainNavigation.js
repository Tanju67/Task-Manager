import React from "react";
import classes from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";

function MainNavigation() {
  return (
    <div className={classes.mainNavigation}>
      <div className={classes.logo}>Task Manager</div>
      <NavLinks />
    </div>
  );
}

export default MainNavigation;
