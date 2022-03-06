import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import { forecastActions } from "../store";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(forecastActions.setHasSelected(true));
    dispatch(forecastActions.setLatLong(props.data));
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
