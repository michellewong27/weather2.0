import React from "react"

export default function Item({date, temp, feels, max, min, humidity, windSpeed, description}) {
  return <div className="flex-column">
  <div><label>Date</label>{date}</div>
  <div><label>Temperature</label>{temp}</div>
  <div><label>Feels like</label>{feels}</div>
  <div><label>Max temp</label>{max}</div>
  <div><label>Min Temp</label>{min}</div>
  <div><label>Humidity</label>{humidity}</div>
  <div><label>Wind speed</label>{windSpeed}</div>
  <div><label>Description</label>{description}</div>
</div>
}