import React, {useState, useEffect} from 'react';
import CitySearch from './citysearch';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

export default function Current(){
  const [city, setCity] = useState("New York")
  const [data, setData] = useState({
    main: {
      temp: 0,
      feels_like: 0,
    }
  })
  const [scale, setScale] = useState("imperial")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=${scale}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("HERE", json)
        if(json.cod === "404") return
        setData(json)
      })
  }, [city,scale])

console.dir(data)

  return (
    <div>
      <CitySearch city={city} setCity={setCity} scale={scale} setScale={setScale}/>
       <div className="flex-container">
        <h1 style={{display:"flex", width:"100%", justifyContent:"center"}}>{city}'s Current Weather</h1>
  <h2>{data.main.temp}</h2>
  <p>{data.main.feels_like}</p>
       </div>
    </div>
  )
}