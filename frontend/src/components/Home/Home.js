import React, { useContext } from "react";
import classes from "./Home.module.css";
import headerImg from "../../assets/Windows-7-8-10-Task-Manager-zuruecksetzen-so-geht-es-1024x576-22089714b127a7e3.webp";
import Card from "../../shared/UIElements/Card";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.home}>
      <div className={classes.imgBox}>
        <img src={headerImg} alt="img" />
        <Card className={classes.content}>
          <div className={classes.cardHeader}>
            <div className={classes.icon}>
              <FaTasks />
            </div>
            <h2>Task Manger</h2>
          </div>
          <div className={classes.cardContent}>
            {!authCtx.isLoggedIn && (
              <p>
                Please make a <NavLink to={"/login"}>login</NavLink> to use task
                manager.
              </p>
            )}
            {authCtx.isLoggedIn && <h1>wellcome {authCtx.user.userName}</h1>}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
