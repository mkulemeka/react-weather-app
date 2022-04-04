import React from "react";
import { motion } from "framer-motion";
import "./Display.scss";

const Display = ({ city }) => {
  const { location, current } = city;

  //date settungs and assignment
  const dow = new Date();
  const date = location.localtime;

  const dayOfWeek = dow.toString().substring(0, 3);
  const month = dow.toString().substring(4, 7);
  const year = parseInt(date.substr(2, 4))
  const day = parseInt(date.substr(8, 2));
  const time = date.substr(11);

  return (
    <div className="display">
      <h3>Weather</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="temp" style={{ transitoin: "500ms ease-in-out" }}>
          {Math.round(current.temp_f)}&#176;
        </h1>
        <div className="city">
          <div className="city-time">
            <h2 className="name">{location.name}</h2>
            <small>
              <span className="time">{time}</span> -
              <span className="date">
                {" "}
                {dayOfWeek}, {day} {month} '{year}
              </span>
            </small>
          </div>
          <div className="weather-icon">
            <img src={current.condition.icon} alt="icon" />
            <span className="weather-condition">{current.condition.text}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Display;
