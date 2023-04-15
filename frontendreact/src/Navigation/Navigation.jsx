import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <span>electronics</span>
        <span>jewelery</span>
        <span>men's clothing</span>
        <span>women's clothing</span>
      </div>
    </>
  );
};
export default Navigation;
