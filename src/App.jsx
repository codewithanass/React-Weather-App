import "./styles/style.css"
import SearchBar from "./components/SearchBar"
import Weather from "./components/Weather"
import { useEffect, useState } from "react"
import Rain from "./assets/rain.png"
import Clouds from "./assets/clouds.png"
import Clear from "./assets/clear.png"
import Drizzle from "./assets/drizzle.png"
import Mist from "./assets/mist.png"

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState({
    temp: "",
    city: "",
    humidity: "",
    windSpeed: "",
    img: Rain
  });
  
  const apiKey = "b17ffcc8991e45f428102850bbc7d2e3";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const handleWeatherDetails = (cityName) => {
    fetch(apiUrl + cityName + `&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const newTemp = Math.round(data.main.temp);
        const newCity = data.name;
        const newHumidity = data.main.humidity;
        const newWind = data.wind.speed;
        const weatherCondition = data.weather[0].main;

        setWeatherDetails(prevDetails => ({
          ...prevDetails,
          temp: newTemp + "°C",
          city: newCity,
          humidity: newHumidity + "%",
          windSpeed: newWind + "km/h",
          img: weatherCondition === "Clouds" ? Clouds :
               weatherCondition === "Clear" ? Clear :
               weatherCondition === "Rain" ? Rain :
               weatherCondition === "Drizzle" ? Drizzle :
               weatherCondition === "Mist" ? Mist : Rain, // Default to Rain if unknown
        }));
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        setWeatherDetails({
          temp: "N/A",
          city: "City Not Found",
          humidity: "N/A",
          windSpeed: "N/A",
          img: "N/A"
        });
      });
  };
    

  return (
    <div className="card" >
      <SearchBar 
        onSearch={handleWeatherDetails}
        weatherDetails={weatherDetails}
        
      />
      <Weather data={weatherDetails} />
    </div>
  )
}

export default App
