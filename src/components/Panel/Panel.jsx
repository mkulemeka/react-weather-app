import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Panel.scss";

const Panel = ({ city, search, setSearch, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(search);
  };

  const { current } = city;
  return (
    <div className="panel">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button className="search-btn">
          <BsSearch />
        </button>
      </form>
      <ul className="cities">
        {["New York", "London", "Tokyo", "Lilongwe"].map((name, index) => (
          <li key={name + index} className="city" onClick={(e) => setInputValue(e.target.innerText)}>
            {name}
          </li>
        ))}
      </ul>

      <div className="weather-details">
        <h3 className="title">Weather Details</h3>
        <ul className="weather__details-list">
          <li className="detail">
            <span>Cloudy</span> <span>{current.cloud}%</span>
          </li>
          <li className="detail">
            <span>Humidity</span> <span>{current.humidity}%</span>
          </li>
          <li className="detail">
            <span>Wind</span> <span>{current.wind_kph} kph</span>
          </li>
          <li className='detail'>
            <span>Rain</span> <span>{current.precip_mm} mm</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panel;
