import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function Location({ cities, location, setLocation }) {
  // const foundCity = cities.find((city) => location === city.city);
  // if (foundCity) {
  //   return (
  //     <>
  //       <div className="app">
  //         <WeatherCard city={foundCity} />
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h3 className="subtitle">Location not found</h3>;
  //       <div className="app">
  //         {cities.map((city) => (
  //           <WeatherCard city={city} />
  //         ))}
  //       </div>
  //     </>
  //   );
  // }
  const [temp, setTemp] = useState(0);
  const [weatherCode, setWeatherCode] = useState(0);

  const getWeather = async (location) => {
    try {
      const res = await fetch(
        `https://geocode.maps.co/search?q=${location}&api_key=65de547d7ab45258347527hxp7924e0`
      );
      const data = await res.json();
      let lat = data[0].lat;
      let lon = data[0].lon;
      const res2 = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature&temperature_unit=fahrenheit&current=weather_code`
      );
      const data2 = await res2.json();
      setTemp(data2.current.temperature);
      setWeatherCode(data2.current.weather_code);
    } catch (e) {
      return <div>Error</div>;
    }
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const codeMap = {
    0: "Sunny",
    1: "Partly cloudy",
    2: "Partly cloudy",
    3: "Cloudy",
    61: "Rainy",
    63: "Rainy",
    65: "Rainy",
    71: "Snowy",
    73: "Snowy",
    75: "Snowy",
  };

  return (
    <div className="app">
      <WeatherCard
        city={{
          city: location,
          temperature: temp,
          forecast: codeMap[weatherCode],
        }}
      />
    </div>
  );
}

// Export the WeatherCard
export default Location;
