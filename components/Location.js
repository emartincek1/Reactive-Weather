import React from "react";
import WeatherCard from "./WeatherCard";

function Location({ cities, location, setLocation }) {
  const foundCity = cities.find((city) => location === city.city);
  if (foundCity) {
    return (
      <>
        <div className="app">
          <WeatherCard city={foundCity} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3 className="subtitle">Location not found</h3>;
        <div className="app">
          {cities.map((city) => (
            <WeatherCard city={city} />
          ))}
        </div>
      </>
    );
  }
}

// Export the WeatherCard
export default Location;
