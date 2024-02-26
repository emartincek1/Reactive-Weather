import WeatherCard from "./WeatherCard";

function Location({ cities, location, setLocation }) {
  const foundCity = cities.find((city) => location === city.city);
  return <WeatherCard city={foundCity} />;
}

// Export the WeatherCard
export default Location;
