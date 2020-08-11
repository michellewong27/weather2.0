import React, {useState, useEffect} from "react"
import "./styles.css"

import Item from "./item"
import Toolbar from "./toolbar"

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

export default function App() {
  const [city, setCity] = useState("New York")
  const [data, setData] = useState([])
  const [scale, setScale] = useState("imperial")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${scale}`)
      .then((resp) => resp.json())
      .then((json) => {

        if(json.cod === "404") return
        setData(json.list)
      })
  }, [city, scale])

  return <div>
    <Toolbar  city={city} setCity={setCity} scale={scale} setScale={setScale}/>
    <div className="flex-container">
    {
      data.map(day => {
        const {dt, main} = day
        const {temp, feels_like, max_temp, min_temp, humidity} = main
        return <Item
          date={dt}
          temp={temp}
          feels={feels_like}
          max={max_temp}
          min={min_temp}
          humidity={humidity}
        />
      })
    }
    </div>
  </div>
}