import React from "react";
import MainNavigation from "../shared/UIElements/NavBar/MainNavigation";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Index;
