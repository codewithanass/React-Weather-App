import "../styles/style.css"
import Humidity from "../assets/humidity.png"
import Wind from "../assets/wind.png"

const Weather = ({data}) => {
  return (
    <div className={data.city === "" ? "hidden" : "weather"} >
      <img src={data.img} alt="rain-icon" className="weather-icon" />
      <h1 className="temp">{data.temp}</h1>
      <h2 className="city">{data.city}</h2>
      <div className="details">
        <div className="col">
          <img src={Humidity} alt="humidity-icon" />
          <div>
            <p className="humidity">{data.humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={Wind} alt="wind-icon" />
          <div>
            <p className="wind">{data.windSpeed}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
