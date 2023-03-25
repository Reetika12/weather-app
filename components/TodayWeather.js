import moment from "moment-timezone";
import React from "react";
import Image from "next/image";
import todayWeatherStyle from "../styles/Today.module.css";

export default function TodaysWeather({ city, weather, timezone }) {
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

        {/* <div className="today__right-content">
          <div className="today__icon-wrapper">
            <div>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                layout="fill"
              />
            </div>
          </div>

          <h3>{weather.weather[0].description}</h3>
        </div> */}
      </div>
    </div>
  );
}
