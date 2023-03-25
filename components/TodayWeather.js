import moment from "moment-timezone";
import React from "react";
import todayWeatherStyle from "../styles/Today.module.css";

export default function TodaysWeather({ city }) {
  if (!city) {
    return <div>Loading forecast...</div>;
  }
  return (
    <div className={todayWeatherStyle.parentDiv}>
      <div className={todayWeatherStyle.today}>
        <div className={todayWeatherStyle.__inner}>
          <div>
            <h1 style={{ margin: "10px 0px" }}>
              {city.name} ({city.country})
            </h1>
            <div>
              <span>Sunrise</span>
              <span>
                {moment
                  .unix(city.sunrise)
                  .utcOffset(city.timezone / 60)
                  .format("LT")}
              </span>
            </div>
            <div>
              <span>Sunset</span>
              <span>
                {moment
                  .unix(city.sunset)
                  .utcOffset(city.timezone / 60)
                  .format("LT")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
