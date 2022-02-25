import React from "react";
import "./mainWindow.css";
import WeatherPic from "../weatherPic/weatherPic";
import TodayCelsius from "../weatherCelsius/todayCelsius";
import WeeklyTemp from "../weeklyTemp/weeklyTemp";

function MainWindow() {
  return (
    <>
      <div className="mainwindow">
        <WeatherPic />
        <TodayCelsius />
        <WeeklyTemp />
      </div>
    </>
  );
}
export default MainWindow;


