import React from "react";
import WeatherCard from "./components/WeatherCard.js";
import Location from "./components/Location.js";
import Form from "./components/Form.js";
import cities from "./data";
import { useState } from "react";
// Import data and WeatherCard here

function App() {
  const [location, setLocation] = useState("Rome");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>

      <Form location={location} setLocation={setLocation} />

      <Location cities={cities} location={location} setLocation={setLocation} />
    </>
  );
}

export default App;
