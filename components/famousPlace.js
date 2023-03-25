import React from "react";
import Image from "next/image";
import Link from "next/link";
import LondonImage from "../public/images/london.jpg";
import ParisImage from "../public/images/paris.jpg";
import TokyoImage from "../public/images/tokyo.jpg";
import NewYorkImage from "../public/images/new-york.jpg";
import UsImage from "../public/images/usa.jpg";

const places = [
  {
    name: "US",
    image: UsImage,
    url: "/location/london-2643743",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <a>
                <div className="places__image-wrapper">
                  <Image
                    src={place.image}
                    alt={`${place.name} Image`}
                    style={{
                      layout: "fill",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <span>{place.name}</span>
              </a>
              {/* </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
}
