import React from "react";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";
import { useState } from "react";
// Import data and WeatherCard here

function App() {
  const [location, setLocation] = useState("Rome");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <Location
          cities={cities}
          location={location}
          setLocation={setLocation}
        />
      </div>
    </>
  );

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((city) => (
          <WeatherCard city={city} />
        ))}
      </div>
    </>
  );
}

export default App;
