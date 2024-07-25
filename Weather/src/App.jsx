import { useState } from 'react';









const mockWeatherData = {
  'New York': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h',
  },
  'London': {
    temperature: '15°C',
    humidity: '70%',
    windSpeed: '20 km/h'
  },
  'Tokyo': {
    temperature: '30°C',
    humidity: '40%',
    windSpeed: '12 km/h'
  },
  'washinton': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
};

function HistoryButton(props) {
  const { city, onClick } = props;
  return (<button key={city} id="cityButton" onClick={() => onClick(city)}>{city}</button>);
}

function WeatherDashboard() {
  const [buscar, setbuscar] = useState('');
  const [climaActual, setClimaActual
  ] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const buscador = () => {
    const city = buscar.trim();
    if (mockWeatherData[city]) {
      setClimaActual
({ city, ...mockWeatherData[city] });

      
      if (!searchHistory.includes(city)) {
        setSearchHistory([...searchHistory, city]);
      }
    } else {
      setClimaActual
({ city, error: 'City not found' });
    }
    setbuscar('');
  };

  const handleCityClick = (city) => {
    setClimaActual({ city, ...mockWeatherData[city] });
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={buscar}
        onChange={(e) => setbuscar(e.target.value)}
      />
      <button id="searchButton" onClick={buscador}>Search</button>
      <div id="previousSearches">
        {searchHistory.map(
          city => <HistoryButton key={city} city={city} onClick={handleCityClick} />
        )}
      </div>
      <div id="weatherData">
        {climaActual
   && climaActual
  .error ? (
          <div id="error">{climaActual
      .error}</div>
        ) : (
          climaActual
     && (
            <>
              <div id="temperature">Temperature: {climaActual
        .temperature}</div>
              <div id="humidity">Humidity: {climaActual
        .humidity}</div>
              <div id="wind-speed">Wind Speed: {climaActual
        .windSpeed}</div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;
