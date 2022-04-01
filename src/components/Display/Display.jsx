import React from "react";
import "./Display.scss";

const Display = ({ city }) => {
  const { location, current } = city;
  const date = location.localtime;
  const y = parseInt(date.substr(0, 4));
  const m = parseInt(date.substr(5, 2));
  const d = parseInt(date.substr(8, 2));
  const time = date.substr(11);

  return (
    <div className="display">
      <h3>Weather</h3>
      <div>
        <h1 className="temp">{Math.round(current.temp_c)}&#176;</h1>
        <div className="city">
          <div className="city-time">
            <h2 className="name">{location.name}</h2>
            <small>
              <span className="time">{time}</span> -
              <span className="date">
                {" "}
                Friday, {m}-{d}-{y}
              </span>
            </small>
          </div>
          <div className="weather-icon">
            <img src={current.condition.icon} alt="icon" />
            <span className="weather-condition">{current.condition.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
