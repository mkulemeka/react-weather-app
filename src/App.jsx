import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Display, Panel } from "./components";
import { backgrounds } from "./assets";

const App = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("Philadelphia");
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputValue}`;

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

  //Function changes background according to weather condition
  const background = () => {
    let image = "";
    const code = current.condition.code;

    if (code === 1000) {
      image = current.is_day ? backgrounds.daySunny1 : backgrounds.nightClear;
    } else if (code === 1003) {
      image = current.is_day
        ? backgrounds.dayPartlyCloudy
        : backgrounds.nightPartlyCloudy;
    } else if (code === 1006) {
      image = current.is_day ? backgrounds.dayCloudy : backgrounds.nightCloudy;
    } else if (code === 1009) {
      image = backgrounds.dayOvercast;
    } else if (code === 1030) {
      image = current.is_day ? backgrounds.dayMist : backgrounds.nightMist;
    } else if (
      code === 1063 ||
      code === 1150 ||
      code === 1153 ||
      code === 1180 ||
      code === 1183 ||
      code === 1186 ||
      code === 1189 ||
      code === 1192 ||
      code === 1195 ||
      code === 1240
    ) {
      image = current.is_day ? backgrounds.dayRainy : backgrounds.nightRain;
    } else if (
      code === 1066 ||
      code === 1210 ||
      code === 1213 ||
      code === 1216 ||
      code === 1219 ||
      code === 1222
    ) {
      image = current.is_day ? backgrounds.daySnow : backgrounds.nightSnow;
    } else if (
      code === 1222 ||
      code === 1225 ||
      code === 1237 ||
      code === 1258
    ) {
      image = current.is_day
        ? backgrounds.daySnowStorm
        : backgrounds.nightSnowStorm;
    } else if (
      code === 1171 ||
      code === 1192 ||
      code === 1195 ||
      code === 1201 ||
      code === 1207 ||
      code === 1243 ||
      code === 1246 ||
      code === 1252 ||
      code === 1264
    ) {
      image = backgrounds.dayHeavyRain;
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
          transition={{ duration: 0.5 }}
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
