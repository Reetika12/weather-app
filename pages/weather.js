import React from "react";
// import cities from "../lib/city.list.json";
import Link from "next/link";
import Router from "next/router";
import weatherStyles from "../styles/Weather.module.css";

export default function Weather({ placeholder }) {
  const [id, setId] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const clearQuery = () => setId("");
    Router.events.on("routeChangeComplete", clearQuery);

    return () => {
      Router.events.off("routeChangeComplete", clearQuery);
    };
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <div className={weatherStyles.search}>
      <input
        type="text"
        value={id}
        onChange={onChange}
        placeholder={"Enter Zip Code"}
      />

      <Link href="/weather/[id]" as={`/weather/${id}`}>
        <div className={weatherStyles.linkStyle}>Enter Zip</div>
      </Link>
    </div>
  );
}
