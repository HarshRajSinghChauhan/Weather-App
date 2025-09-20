import React from 'react';
import SearchBar from './SearchBar';
import InfoBox from './InfoBox';
import './WeatherApp.css';
import { useState } from 'react';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="weather-app">
      <div className="weather-card">
        <h2>Weather App</h2>
        <SearchBar setWeatherData={setWeatherData} />
        <InfoBox info={weatherData} />
      </div>
    </div>
  );
}

export default WeatherApp;
