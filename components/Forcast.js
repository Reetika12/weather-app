import React from "react";
import WeatherItem from "./WeatherItem";
function Forecast({ forecastData }) {
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
      <h2 style={{ textAlign: "center" }}>
        {city?.name} 3-hour forecast for the next 5 days:
      </h2>
      {Object?.entries(groupByDay)?.map(([date, weatherList]) => (
        <div
          key={date}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>{new Date(date)?.toLocaleDateString()}</h3>
          <div style={{ display: "flex" }}>
            {weatherList.map((weather, index) => (
              <WeatherItem
                weather={weather}
                timeZone={forecastData?.city?.timezone}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
