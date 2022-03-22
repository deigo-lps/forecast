import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {
  forecastActions,
  historyActions,
  searchActions,
  errorActions,
} from "../store";
import getId from "../functions/getId";
import style from "./ListItem.module.scss";
const ListItem = (props) => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);
  const user = useSelector((state) => state.login.user);
  async function postData() {
    let newCity = props.data;
    const id = getId(newCity);
    if (!(id in history)) {
      try {
        const response = await fetch(
          `https://forecast-20acd-default-rtdb.firebaseio.com/forecast/${user}/${id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(props.data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          dispatch(
            errorActions.setError(`${response.status}: ${response.statusText}`)
          );
          return;
        }
        dispatch(historyActions.addToHistory({ id: id, city: newCity }));
      } catch {
        dispatch(errorActions.setError(`Something went wrong.`));
      }
    }
  }

  const handleClick = () => {
    dispatch(forecastActions.setHasSelected(true));
    dispatch(forecastActions.setLatLong(props.data));
    dispatch(searchActions.setHasSearched(false));
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
