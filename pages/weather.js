import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import weatherStyles from "../styles/Weather.module.css";

export default function Weather() {
  const [id, setId] = React.useState("");
  const router = useRouter();

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

  const handleClick = () => {
    if (id) {
      router.push(`/weather/${id}`);
    }
  };

  return (
    <div className={weatherStyles.search}>
      <input
        type="text"
        value={id}
        onChange={onChange}
        placeholder={"Enter Zip Code"}
      />
      <button className={weatherStyles.submit} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
