import { FC } from "react";
import { TMenuBurger } from "./types";
import classes from "./MenuBurger.module.scss";
const MenuBurger: FC<TMenuBurger> = ({
  title,
  name,
  picture,
  count,
  calories,
  id,
  filling,
  supplementToFood
}) => {
  return (
    <>
      <span className={classes.title}> {title}</span>
      <div className={classes.display__menu}>
        <div className={classes.display__menu__burger}>
          {name} - {id}
          {picture}
          {count} - {calories}
        </div>
        <div>{filling}</div>
        <div>{supplementToFood}</div>
      </div>
    </>
  );
};

export default MenuBurger;
