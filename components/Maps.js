import React from "react";
import { API_KEY } from "../config";

const Maps = ({ activeLocation }) => {
  const mapStyles = {
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    backgroundColor: "var(--primary)",
  };
  return (
    <div style={mapStyles}>
      <iframe
        width='100%'
        height='100%'
        frameBorder={0}
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${activeLocation
          .replace(" ", "+")
          .replace("&", "AND")}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Maps;
