import React, {useState, useEffect} from 'react';
import CitySearch from './citysearch';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34';

export default function Hourly(){
  const [city, setCity] = useState("New York")
  const [data, setData] = useState([])
  const [scale, setScale] = useState("imperial")

  useEffect(() => {
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${key}&units=${scale}`)
      .then((resp) => resp.json())
      .then((json) => {
        if(json.cod === "404") return
        console.log("houuurly",json)
        setData(json)
      })
  }, [city,scale])

  const degrees = scale === 'imperial'? 'F' : 'C';

  return(
    <div>
      <CitySearch city={city} setCity={setCity} scale={scale} setScale={setScale}/>
      <h1>Hourly</h1>
    </div>
  )
}