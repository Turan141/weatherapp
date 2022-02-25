import React, { useState } from "react";
import "./todayCelsius.css";
import getData from "../service/service";

function TodayCelsius() {
  let [celsius, setCelsius] = useState(0);

  let todayWeatherFn = async () => {
    let data = await getData().then((result) => {
      setCelsius((celsius = Math.round(result.current.temp_c)));
    });
  };
  todayWeatherFn();
  return (
    <>
      <div className="todaycelsius">
        <h2>Today</h2>
        <h1>{celsius}°</h1>
      </div>
    </>
  );
}

export default TodayCelsius;
