import React, {useState, useEffect} from 'react';
import CitySearch from './citysearch';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

export default function Current(){
  const [city, setCity] = useState("New York")
  const [data, setData] = useState({
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0
    },
     wind: {
       speed: 0
     },
     //how to write weather[0].description
     weather:[]
     
  })
  const [scale, setScale] = useState("imperial")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=${scale}`)
      .then((resp) => resp.json())
      .then((json) => {
        if(json.cod === "404") return
        console.log(json)
        setData(json)
      })
  }, [city,scale])

  const degrees = scale === 'imperial'? 'F' : 'C';
  return (
    <div>
      <CitySearch city={city} setCity={setCity} scale={scale} setScale={setScale}/>
       <div className="flex-container">
        <h1 style={{display:"flex", width:"100%", justifyContent:"center"}}>{city}'s Current Weather</h1>
        <div className="flex-column">
          <h2 className="currentInfo"><label>Temp</label>{data.main.temp}<span>&#176;</span>{degrees}</h2>
          <h2 className="currentInfo"><label>Feels like</label>{data.main.feels_like}<span>&#176;</span>{degrees}</h2>
          <h2 className="currentInfo"><label>Max Temp</label>{data.main.temp_max}<span>&#176;</span>{degrees}</h2>
          <h2 className="currentInfo"><label>Min Temp</label>{data.main.temp_min}<span>&#176;</span>{degrees}</h2>
          <h2 className="currentInfo"><label>Humidity</label>{data.main.humidity}%</h2>
          <h2 className="currentInfo"><label><i className='fas fa-wind' style={{fontSize:'20px'}}></i></label>{data.wind.speed} mph</h2>
          {/* <div className="info"><label>{DESCRIPTION HERE}</label></div>
          <img src={"//openweathermap.org/img/wn/" + iconId + "@2x.png"} alt="weather-icon"/> */}
        </div>
       </div>
    </div>
  )
}