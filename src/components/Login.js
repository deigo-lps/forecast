import React, { useEffect, useRef,useCallback } from "react";
import Card from "./Card";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { loginActions } from "../store";
import { historyActions } from "../store";
import style from "./Login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const username = useRef();

  const getData = useCallback(async function getData(user) {
    const response = await fetch(
      `https://teste-accurate-default-rtdb.firebaseio.com/forecast/${user}.json`
    );
    const data = await response.json();
    dispatch(historyActions.setHistory(data || {}));
  },[dispatch]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      getData(user);
      dispatch(loginActions.login(user));
    }
  }, [dispatch,getData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = username.current.value;
    getData(user);
    localStorage.setItem("user", user);
    dispatch(loginActions.login(user));
  };

  return (
    <div className={style.login}>
      <Card>
        <form onSubmit={handleSubmit}>
          <input ref={username} placeholder="username" />
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
