import React, { useContext } from "react";
import classes from "./NavLinks.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

function NavLinks() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await fetch(`http://localhost:5000/api/v1/auth/logout`, {
        credentials: "include",
      });
      authCtx.logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {authCtx.isLoggedIn && (
        <li>
          <NavLink to={"/tasks-manager"}>Task Manager</NavLink>
        </li>
      )}
      {!authCtx.isLoggedIn && (
        <li>
          <NavLink to={"/login"}>Login/Register</NavLink>
        </li>
      )}
      {authCtx.isLoggedIn && (
        <li onClick={logoutHandler}>
          <NavLink to={"/"}>Logout</NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
