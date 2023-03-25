import weatherItemStyles from "../styles/WeatherItem.module.css";
import React from "react";
import moment from "moment-timezone";

function WeatherItem({ weather, timeZone, key }) {
  console.log("weather@#$%^%&", weather);
  return (
    <div className={weatherItemStyles.hourly} key={key}>
      <div className={weatherItemStyles.inner}>
        <div className={weatherItemStyles.box}>
          <span className={weatherItemStyles.time}>
            {moment
              .unix(weather.dt)
              .utcOffset(timeZone / 60)
              .format("LT")}
          </span>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            width="100"
            height="100"
          />
          <span>{weather.main.temp.toFixed(0)}&deg;C</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherItem;
