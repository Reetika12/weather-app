import Link from "next/link";
import { API_KEY } from "../../../Config/index";
import TodaysWeather from "../../../components/TodayWeather";
import Forecast from "../../../components/Forcast";

// const API_KEY = "9234e9a535ed03d6e49f9dc6e709bb38";
const weatherZipCode = ({ weatherData }) => {
  //   const router = useRouter();
  console.log("weatherData++", weatherData);
  //   const { id } = router.query;
  return (
    <>
      <TodaysWeather city={weatherData?.city} />
      <br />
      <Forecast forecastData={weatherData} />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("context params+++", context.params.id);
  let posts = [];
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
export default weatherZipCode;
