import React from "react";
import Card from "./Card";
import style from "./Navbar.module.scss";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  loginActions,
  searchActions,
  forecastActions,
  historyActions,
} from "../store";
const Navbar = () => {
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(loginActions.logout());
    dispatch(searchActions.clearSearch());
    dispatch(forecastActions.clearForecast());
    dispatch(historyActions.clearHistory());
  };

  return (
    <Card className={style.navbar}>
      <h1>Weather Forecast</h1>
      <div>
        <p>User: {user}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </Card>
  );
};

export default Navbar;
