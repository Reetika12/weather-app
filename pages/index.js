import Head from "next/head";
import Weather from "./weather";
import FamousPlaces from "../components/famousPlace";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Weather />
    </div>
  );
}
