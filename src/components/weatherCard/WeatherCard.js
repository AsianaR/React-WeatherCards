import { useEffect, useState } from "react";
import weatherService from "../../services/WeatherService";
import "./WeatherCard.css";
import humidityLogo from '../../images/humidity.png';
import windLogo from '../../images/wind.png';

const WeatherCard = (propCity) => {
  const [data, setData] = useState();
  const [background, setBackground] = useState();
  useEffect(() => {
    const request = async (propCity) => {
      const data = await weatherService.getData(propCity);
      setData(data);
    };
    request(propCity);
     
  }, []);
  
 useEffect(() => {
  // if(data?.month === '9' || data?.month === '10' || data?.month === '11' ){
  //   setBackground('https://llllline.com/images/thumbs/0000001062_spring-landscape-ai-vector_800.jpeg');}
  // else if(data?.month === '03' || data?.month === '04' || data?.month === '05' ){
  //   setBackground('https://static.vecteezy.com/system/resources/previews/002/952/785/non_2x/autumn-season-scenery-free-vector.jpg');}
  // else if(data?.month === '06' || data?.month === '07' || data?.month === '08' ){
  //   setBackground('https://i.pinimg.com/originals/9b/54/c9/9b54c9bce6eec81ec222054ed9f4f880.jpg');}
  // else{
    setBackground('https://static.vecteezy.com/system/resources/previews/004/930/679/non_2x/winter-snowy-mountain-portrait-wallpaper-vector.jpg');}
 //}
 );

    

  
  

  return (
    <>
      
      <div className="weather-card"  style={{
          backgroundImage: `url(${background})`
        }}>
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
