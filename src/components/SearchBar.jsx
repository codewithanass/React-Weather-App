import "../styles/style.css"
import SearchIcon from "../assets/search.png"
import { useState } from "react"


const SearchBar = ({onSearch, weatherDetails}) => {
    const [cityName, setCityName] = useState(weatherDetails.city)

    const handleClick = () => {
      onSearch(cityName)
    }

  return (
    <div className="search">
        <input
          type="text" 
          className="search-box" 
          placeholder="Enter city name" 
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleClick}><img src={SearchIcon} /></button>
    </div>
  )
}

export default SearchBar
