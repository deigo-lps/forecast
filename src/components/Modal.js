import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./Modal.module.scss";
import ReactDOM from "react-dom";
export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className={style.backdrop} onClick={props.onClick}></div>
          <Card className={style.modal}>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <Button onClick={props.onClick}>
              Ok
            </Button>
          </Card>
        </>,document.getElementById("overlay-root")
      )}
    </>
  );
}