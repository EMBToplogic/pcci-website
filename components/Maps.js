import React, { useEffect, useState } from "react";

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
        src={`https://www.google.com/maps/embed/v1/place?key=${"AIzaSyDZyUtlD-3zzsRYYKkvGG47BdS8diMrbUg"}&q=${activeLocation
          .replace(" ", "+")
          .replace("&", "AND")}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Maps;
