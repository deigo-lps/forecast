import React from "react";
import Card from "./Card";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  return (
    <li>
      <Card className={style["list-item"]}>
        {`${props.data.name} - ${props.data.state} - ${props.data.country}`}
        </Card>
    </li>
  );
};

export default ListItem;
