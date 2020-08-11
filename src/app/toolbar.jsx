import React from "react"

export default function Toolbar({city, setCity, scale, setScale}) {
  return <div>
    <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
    <select value={scale} onChange={e => setScale(e.target.value)}>
      {
        ["imperial", "metric"].map(scale => <option value={scale}>{scale}</option>)
      }
    </select>
  </div>
}