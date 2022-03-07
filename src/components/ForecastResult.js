import React from "react";
import style from "./ForecastResult.module.scss"
const ForecastResult = (props) =>{
  return(
    <div className={style['forecast-result']}>
      <h1>{props.data.name} - {props.data.sys.country}</h1>
      <p>Weather: {props.data.weather[0].description}</p>
      <p>Current Temp: {props.data.main.temp} ºC</p>
      <p>Feels Like: {props.data.main.temp} ºC</p>
      <p>Max: {props.data.main.temp_max} ºC</p>
      <p>Min: {props.data.main.temp_min} ºC</p>
    </div>
  )
}

export default ForecastResult;