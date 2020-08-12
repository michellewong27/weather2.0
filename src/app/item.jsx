import React from "react"

export default function Item({date, temp, feels, max, min, humidity, windSpeed, description, scale}) {
  
  const degrees = scale === 'imperial'? 'F' : 'C'
  
  return <div className="flex-column">
  <div><label>Date</label>{date}</div>
  <div><label>Temperature</label>{temp}<span>&#176;</span>{degrees}</div>
  <div><label>Feels like</label>{feels}<span>&#176;</span>{degrees}</div>
  <div><label>Max temp</label>{max}<span>&#176;</span>{degrees}</div>
  <div><label>Min Temp</label>{min}<span>&#176;</span>{degrees}</div>
  <div><label>Humidity</label>{humidity}%</div>
  <div><label>Wind speed</label>{windSpeed}mph</div>
  <div><label>Description</label>{description}</div>
</div>
}