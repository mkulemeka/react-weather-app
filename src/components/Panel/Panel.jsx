import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Panel.scss";

const Panel = ({ search, setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="panel">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn">
          <BsSearch />
        </button>
      </form>
      <ul className="cities">
        {["New York", "London", "Tokyo", "Lilongwe"].map((city, index) => (
          <li key={city + index} className="city">
            {city}
          </li>
        ))}
      </ul>
      <div className="weather-details">
        <h3 className="title">Weather Details</h3>
        <ul className="weather__details-list">
          <li className="detail">
            <span>Cloudy</span> <span>86%</span>
          </li>
          <li className="detail">
            <span>Humidity</span> <span>62%</span>
          </li>
          <li className="detail">
            <span>Wind</span> <span>8km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panel;
