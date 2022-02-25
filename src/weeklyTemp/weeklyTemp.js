import React, { useState } from "react";
import getData from "../service/service";
import "./weeklyTemp.css";

let date = new Date();
let weekday = date.getDay();
let today = null;
let tomorrow = null;
let dayafter = null;

let dayOfWeekObj = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5 };
let days = {
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
  7: "Sun",
};
for (let i in days) {
  if (weekday == i) {
    today = days[i];
  } else if (weekday + 1 == i) {
    tomorrow = days[i];
  } else if (weekday + 2 == i) {
    dayafter = days[i];
  } else dayafter = "Mon";
}

function WeeklyTemp() {
  let [celsius1, setCelsius1] = useState(0);
  let [celsius2, setCelsius2] = useState(0);

  let weeklyWeatherFn = async () => {
    let data = await getData().then((result) => {
      setCelsius1(
        (celsius1 = Math.round(result.forecast.forecastday[1].day.avgtemp_c))
      );
      setCelsius2(
        (celsius2 = Math.round(result.forecast.forecastday[2].day.avgtemp_c))
      );
    });
  };
  weeklyWeatherFn();

  return (
    <>
      <div className="weeklyTemp">
        <div className="weeklyTempSlots">
          <div className="slot">
            <h3>{tomorrow}</h3>
            <h2>{celsius1}°</h2>
          </div>
          <div className="slot">
            <h3>{dayafter}</h3>
            <h2>{celsius2}°</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeeklyTemp;
