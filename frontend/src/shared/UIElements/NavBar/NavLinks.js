import React from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/tasks-manager"}>Task Manager</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login/Register</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
