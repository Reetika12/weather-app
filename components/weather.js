import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import weatherStyles from "../styles/Weather.module.css";
import UsImage from "../public/images/weather.jpg";
import Image from "next/image";

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
    <div className={weatherStyles.parentDiv}>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={UsImage}
          alt={`weather Image`}
          style={{
            layout: "fill",
            objectFit: "cover",
            width: "50%",
            height: "50%",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}
