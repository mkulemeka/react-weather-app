import React, { useState, useEffect } from "react";
import { Display, Panel } from "./components";
const App = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("London");
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${search}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCity(data))
      .catch((error) => console.error(error));
  }, [url]);

  console.log(city);
  return (
    <div className="app">
      <Display />
      <Panel setSearch={setSearch} search={search} />
    </div>
  );
};

export default App;
