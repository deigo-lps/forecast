import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import { forecastActions } from "../store";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  const dispatch = useDispatch();

  async function postData() {
    const response = await fetch(
      `https://teste-accurate-default-rtdb.firebaseio.com/forecast.json`,
      {
        method: "POST",
        body: JSON.stringify(props.data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseJSON = await response.json();
  }

  const handleClick = () => {
    dispatch(forecastActions.setHasSelected(true));
    dispatch(forecastActions.setLatLong(props.data));
    postData();
  };

  return (
    <li onClick={handleClick}>
      <Card className={style["list-item"]}>
        {`${props.data.name} - ${props.data.state} - ${props.data.country}`}
      </Card>
    </li>
  );
};

export default ListItem;
