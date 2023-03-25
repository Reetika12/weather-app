import React from "react";
import WeatherItem from "./WeatherItem";
function Forecast({ forecastData }) {
  console.log("forecast+++", forecastData);
  const { city, list } = forecastData;

  if (!forecastData) {
    return <div>Loading forecast...</div>;
  }

  // Group weather data by day
  const groupByDay = list?.reduce((result, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(item);
    return result;
  }, {});

  return (
    <div>
      <h2>{city?.name} 3-hour forecast for the next 5 days:</h2>
      {Object?.entries(groupByDay)?.map(([date, weatherList]) => (
        <div
          key={date}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3>{new Date(date)?.toLocaleDateString()}</h3>
          {weatherList.map((weather) => (
            <WeatherItem
              weather={weather}
              timeZone={forecastData?.city?.timezone}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Forecast;
