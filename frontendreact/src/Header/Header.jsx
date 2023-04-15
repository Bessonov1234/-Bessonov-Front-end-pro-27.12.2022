import React from "react";
import classes from "./Header.module.scss";
// console.log(classes);import {  } from "";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__conteiner}>
          <div className={classes.header__display}>
            <div>
              <span>Log in</span>
            </div><div>
              <span>about</span>
            </div><div>
              <span>Support</span>
            </div>

            <div
            className={classes.header__display__log}
            >
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
