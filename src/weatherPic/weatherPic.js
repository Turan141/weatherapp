import React, { useState } from "react";
import "./weatherPic.css";
import getData from "../service/service";
import cold from "../pic/cold.jpg";
import sunny from "../pic/sunny.jpeg";

function WeatherPic() {
  let [pic, setPic] = useState("");
  let todayWeatherFn = async () => {
    let data = await getData().then((result) => {
      if (Math.round(result.current.temp_c) > 20) {
        setPic((pic = sunny));
      } else if (Math.round(result.current.temp_c) < 20) {
        setPic((pic = cold));
      }
    });
  };
  todayWeatherFn();
  let divImage = {
    backgroundColor: "red",
  };

  // var divImage = {
  //   backgroundImage: "url(" + pic + ")",
  // };
  console.log(pic);
  return (
    <>
      <div
        className="weatherpic"
        style={{
          divImage,
        }}
      >
        <div className="cityname">
          <h1>Baku</h1>
        </div>
        <div
          style={{
            divImage,
          }}
          className="weatherimage"
        ></div>
      </div>
    </>
  );
}

export default WeatherPic;
