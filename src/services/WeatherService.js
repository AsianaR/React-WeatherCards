class WeatherService{

    _apiKey = '9a39add01e324c3e851221701221702';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getData = async (city = 'Kiev') => {
        const res = await this.getResource(`http://api.weatherapi.com/v1/current.json?key=${this._apiKey}&q=${city.propCity}&aqi=no`);
        
        return this.transformData(res);
    }

    transformData = (data) => {
        return{
            city : data.location.name,
            country : data.location.country,
            temperature_c : Math.round(data.current.temp_c),
            isDay : data.current.is_day,
            condition : data.current.condition.text,
            windSpeed : data.current.wind_kph,
            humidity : data.current.humidity,
            month : ((data.location.localtime).split('-'))[1]
        }

    }
}

const weatherService = new WeatherService();

export default weatherService;