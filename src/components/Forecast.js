import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Forecast.module.scss";
import Spinner from "./Spinner";
import ForecastResult from "./ForecastResult";

const Forecast = () => {
  const [forecast, setForecast] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const coord = useSelector((state) => state.forecast.coord);

  useEffect(() => {
    async function getForecast() {
      setIsLoading(true);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=81f0eb29c6d82794c74bebe993837906`
      );
      const data = await response.json();
      setForecast(data);
      setIsLoading(false);
    }
    getForecast();
  }, [coord]);

  return (
    <Card>
      {isLoading ? (
        <Spinner className={style.spinner} />
      ) : (
        <ForecastResult data={forecast} />
      )}
    </Card>
  );
};

export default Forecast;
