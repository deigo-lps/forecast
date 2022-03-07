import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { forecastActions, historyActions } from "../store";
import getId from "../functions/getId";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  const dispatch = useDispatch();
  const history = useSelector(state=>state.history.history);
  const user = useSelector(state=>state.login.user);
  async function postData() {
    let newCity = props.data;
    const id = getId(newCity);
    if(!(id in history)){
      const response = await fetch(
        `https://teste-accurate-default-rtdb.firebaseio.com/forecast/${user}/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(props.data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseJSON = await response.json();
      dispatch(historyActions.addToHistory({id: id, city: newCity}));
    }
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
