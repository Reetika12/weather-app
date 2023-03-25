import moment from "moment-timezone";
import React from "react";
import todayWeatherStyle from "../styles/Today.module.css";

export default function TodaysWeather({ city }) {
  if (!city) {
    return <div>Loading forecast...</div>;
  }
  return (
    <div className={todayWeatherStyle.today}>
      <div className={todayWeatherStyle.__inner}>
        <div className={todayWeatherStyle.left_content}>
          <h1>
            {city.name} ({city.country})
          </h1>
          <div className="today__sun-times">
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
