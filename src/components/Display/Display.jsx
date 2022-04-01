import React from "react";
import { icons } from "../../assets/icons";
import "./Display.scss";

const Display = () => {
  return (
    <div className="display">
      <h3>Weather</h3>
      <div>
        <h1 className="temp">16&#176;</h1>
        <div className="city-time">
          <h2 className="name">London</h2>
          <small>
            <span className="time">06:09</span>-
            <span className="date">Monday, 9 Sep 19</span>
          </small>
        </div>
        <div className="weather-icon">
          <img src={icons.dayCloud} alt='icon' />
          <span className="weather-condition">Cloudy</span>
        </div>
      </div>
    </div>
  );
};

export default Display;
