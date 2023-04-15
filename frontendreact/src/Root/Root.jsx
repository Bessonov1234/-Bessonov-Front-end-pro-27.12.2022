// import React from "react"
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import classes from "./Root.module.scss"
const Root =  (props) =>{
console.log(classes);
  return(

<>
<div 
className={classes.body}
>
<Header/>
<Navigation/>
<Products/>
</div>
</>
    
  )
}

export default Root