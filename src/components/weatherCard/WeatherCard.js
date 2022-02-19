import { useEffect, useState } from "react";
import weatherService from "../../services/WeatherService";
import "./WeatherCard.css";
import humidityLogo from '../../images/humidity.png';
import windLogo from '../../images/wind.png';

const WeatherCard = (propCity) => {
  const [data, setData] = useState();
  useEffect(() => {
    const request = async (propCity) => {
      const data = await weatherService.getData(propCity);
      setData(data);
    };
    request(propCity);
  }, []);



  return (
    <>
      <div className="weather-card">
        <div className="topWeather">
        <div className="location">
          <p>{data?.city ?? "City"}, {data?.country ?? "Country"}</p>
        </div>
        <div className="desc"><p>{data?.condition ?? "Description"}</p></div>
        <div className="temperature">
          <p>{data?.temperature_c ?? "T"}°C</p>
        </div>
        </div>
        <div className="bottomWrapper">
          <div className="card">
            <img src={windLogo}></img>
            {data?.windSpeed ?? "Wind"}</div>
          <div className="card">
          <img src={humidityLogo}></img>
          
            {data?.humidity ?? "Humidity"}%</div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
