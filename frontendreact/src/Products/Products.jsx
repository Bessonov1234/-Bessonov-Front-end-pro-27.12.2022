import React from "react";
import classes from "./Products.module.scss";

const Products = () => {
  return (
    <>
      <div className={classes.products}>
        <div className={classes.products__shoes_1}>
          <span></span>
        </div>
        <div className={classes.products__shoes_2}>
          <span></span>
        </div>
        <div className={classes.products__shoes_3}>
          <span></span>
        </div>
      </div>
    </>
  );
};
export default Products;
