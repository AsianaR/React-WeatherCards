import WeatherCard from "../weatherCard/WeatherCard";
import AddCard from "../addCard/AddCard";
import AppHeader from "../appHeader/AppHeader";
import "./WeatherApp.css";


function App() {
  

  return (
    <div className="app">
        <AppHeader></AppHeader>
        
        <div className="card_wrapper">
        <WeatherCard propCity={'Kiev'}></WeatherCard>
        <WeatherCard propCity={'Warsaw'}></WeatherCard>  
        <AddCard></AddCard>
        </div>
    </div>
  );
}

export default App;