import WeatherCard from "../weatherCard/WeatherCard";
import AddCard from "../addCard/AddCard";
import "./WeatherApp.css";

function App() {
  

  return (
    <div className="app">
        <WeatherCard propCity={'Kiev'}></WeatherCard>
        <WeatherCard propCity={'Minsk'}></WeatherCard>
        <WeatherCard propCity={'Rome'}></WeatherCard>
        <AddCard></AddCard>
    </div>
  );
}

export default App;
