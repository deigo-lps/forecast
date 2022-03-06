import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";
import style from "./List.module.scss"
const List = (props) => {
  return (
    <Card className={style.list}>
      <h1>Previous Cities</h1>
      <ul>
        {props.data.map(data=>{return(
          <ListItem key={data.id} data={data}/>
        )})}
      </ul>
    </Card>
  );
};

export default List;
