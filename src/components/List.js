import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";
import style from "./List.module.scss";
import getId from "../functions/getId";
const List = (props) => {
  return (
    <Card className={style.list}>
      <h1>{props.title}</h1>
      {props.data.length !== 0 ? (
        <ul>
          {props.data.map((data) => {
            return <ListItem key={getId(data)} data={data} />;
          })}
        </ul>
      ) : (
        <p>No Data</p>
      )}
    </Card>
  );
};

export default List;
