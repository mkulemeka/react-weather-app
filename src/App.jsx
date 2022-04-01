import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Display, Panel } from "./components";
import { backgrounds } from "./assets";

const App = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("London");
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputValue}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [url]);

  const { current } = city;
  const background = () => {
    let image = "";
    if (current.condition.code === 1000) {
      image = backgrounds.daySunny1;
    } else if (current.condition.code === 1009) {
      image = backgrounds.dayCloudy;
    }
    return image;
  };

  return (
    <>
      {!isLoading && (
        <motion.div
          className="app"
          style={{ backgroundImage: "url(" + background() + ")" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {!isLoading && (
            <>
              <Display city={city} />
              <Panel
                setSearch={setSearch}
                search={search}
                setInputValue={setInputValue}
                city={city}
              />
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

export default App;
