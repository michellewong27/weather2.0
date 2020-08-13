import React, {useState, useEffect} from "react";
import "./styles.css";
import Item from "./item";
import CitySearch from "./citysearch";
import Toolbar from './Toolbar/toolbar'
const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

export default function Fiveday() {
  const [city, setCity] = useState("New York")
  const [data, setData] = useState([])
  const [scale, setScale] = useState("imperial")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${scale}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json)
        if(json.cod === "404") return
        setData(json.list)
      })
  }, [city, scale])

  return <div>
     <CitySearch city={city} setCity={setCity} scale={scale} setScale={setScale}/>
        <div className="flex-container">
        <h1 style={{display:"flex", width:"100%", justifyContent:"center"}}>{city} Five Day Forecast</h1>
        {
          data.map(day => {
            const {dt,dt_txt, main} = day
            const {temp, feels_like, temp_max, temp_min, humidity} = main
            const {speed} = day.wind
            const {description,icon} = day.weather[0]
            if(dt_txt.includes("12:00")){
              return <Item
                key={dt}
                date={dt_txt}
                temp={temp}
                feels={feels_like}
                max={temp_max}
                min={temp_min}
                humidity={humidity}
                windSpeed={speed}
                description={description}
                scale={scale}
                iconId={icon}
              />
            }
          })
        }
        </div>
  </div>
}