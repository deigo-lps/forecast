import React from "react";
import Card from "./Card";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  return (
    <li>
      <Card className={style["list-item"]}>{props.data.name}</Card>
    </li>
  );
};

export default ListItem;
