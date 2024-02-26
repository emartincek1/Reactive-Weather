import React from "react";
import Sunny from "../assets/Sunny.svg";
import Rainy from "../assets/Rainy.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

function WeatherCard({ city }) {
  const imgs = {
    Sunny: Sunny,
    Rainy: Rainy,
    Cloudy: Cloudy,
    PartlyCloudy: PartlyCloudy,
    Snowy: Rainy,
  };

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={
            imgs[
              city.forecast === "Partly cloudy" ? "PartlyCloudy" : city.forecast
            ]
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
