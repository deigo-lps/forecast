import React, { useRef } from "react";
import Card from "./Card";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { loginActions } from "../store";
import { historyActions } from "../store";
import style from "./Login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const username = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = username.current.value;
    async function getData() {
      const response = await fetch(
        `https://teste-accurate-default-rtdb.firebaseio.com/forecast/${user}.json`
      );
      const data = await response.json();
      dispatch(historyActions.setHistory(data || {}));
    }
    getData();
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
