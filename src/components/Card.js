import React from "react";
import style from "./Card.module.scss"
export default function Card(props){
  return(
    <div style={props.style} className={`${style.card} ${props.className}`}>
      {props.children}
    </div>
  )
}