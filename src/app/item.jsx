import React from "react"

export default function Item({date, temp, feels, max, min, humidity, windSpeed, description, scale, iconId}) {
  
  const degrees = scale === 'imperial'? 'F' : 'C';
  const year = date.substring(0,4);
  const month = date.substring(5,7);
  const day = date.substring(8,10);
  const newDate = month+ '/' + day;
  const newDescription = description[0].toUpperCase()+ description.slice(1);

  return <div className="flex-column">
  <div><label>{newDate}</label></div>
  <div style={{fontWeight:"bold", fontSize:"18px"}}><label>Temperature</label>{temp}<span>&#176;</span>{degrees}</div>
  <div><label>Feels like</label>{feels}<span>&#176;</span>{degrees}</div>
  <div><label>Max Temp</label>{max}<span>&#176;</span>{degrees}</div>
  <div><label>Min Temp</label>{min}<span>&#176;</span>{degrees}</div>
  <div><label>Humidity</label>{humidity}%</div>
  <div><label><i className='fas fa-wind' style={{fontSize:'20px'}}></i></label>{windSpeed} mph</div>
  <div><label>{newDescription}</label></div>
  <img src={"//openweathermap.org/img/wn/" + iconId + "@2x.png"} alt="weather-icon"/>
</div>
}