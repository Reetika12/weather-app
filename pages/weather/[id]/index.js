import React, { useEffect, useState } from "react";
import Link from "next/link";
import { API_KEY } from "../../../Config/index";
import TodaysWeather from "../../../components/TodayWeather";
import Forecast from "../../../components/Forcast";

const WeatherZipCode = ({ weatherData }) => {
  const [loading, setLoading] = useState(false);
  const { city, list } = weatherData;

  useEffect(() => {
    if (city && list && list?.length >= 1) {
      setLoading(true);
    }
  }, [city, list]);

  return (
    <>
      {loading ? (
        <div>
          <TodaysWeather city={weatherData?.city} />
          <br />
          <Forecast forecastData={weatherData} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Link href="/">Go Back</Link>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "10px 10px", color: "red" }}>
            Enter Valid Zip Code
          </div>
          <Link href="/">Go Back</Link>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${context.params.id}&appid=${API_KEY}`
  );
  const weatherData = await res.json();
  return {
    props: {
      weatherData,
    },
  };
};
export default WeatherZipCode;
