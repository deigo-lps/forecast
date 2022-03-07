import React from "react";
import style from "./Button.module.scss";
const Button = (props) => {
  return (
    <button className={`${style.button} ${props.className}`} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
