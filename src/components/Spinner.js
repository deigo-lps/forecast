import React from "react";
import spinnerImage from "../images/logo512.png"
import style from "./Spinner.module.scss"
const Spinner = (props) =>{
  return(
    <div className={`${style.spinner} ${props.className}`}>
      <img src={spinnerImage}/>
    </div>
  )
}

export default Spinner