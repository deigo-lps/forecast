import React, { useEffect, useRef, useCallback } from "react";
import Card from "./Card";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { historyActions, errorActions, loginActions } from "../store";
import style from "./Login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const username = useRef();

  const getData = useCallback(
    async function getData(user) {
      try {
        const response = await fetch(
          `https://teste-accurate-default-rtdb.firebaseio.com/forecast/${user}.json`
        );
        if (!response.ok) {
          dispatch(
            errorActions.setError(`${response.status}: ${response.statusText}`)
          );
          return false;
        }
        const data = await response.json();
        dispatch(historyActions.setHistory(data || {}));
        return true;
      } catch {
        dispatch(errorActions.setError(`Something went wrong.`));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      getData(user);
      dispatch(loginActions.login(user));
    }
  }, [dispatch, getData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = username.current.value;
    if (await getData(user)) {
      localStorage.setItem("user", user);
      dispatch(loginActions.login(user));
    }
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
