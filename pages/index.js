import Head from "next/head";
import Weather from "../components/weather";

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
