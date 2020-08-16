import React from "react"

export default function CitySearch({city, setCity, scale, setScale}) {
  return(
    <div className="city-search">
      <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
      <select value={scale} onChange={e => setScale(e.target.value)}>
        {
          ["Imperial", "Metric"].map(scale => <option value={scale}>{scale}</option>)
        }
      </select>
    </div>
  )
}