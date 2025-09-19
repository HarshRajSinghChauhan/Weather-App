import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import './SearchBar.css'
import { useState } from 'react';
import InfoBox from './InfoBox';

function SearchBar({setWeatherData}) {

  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3065b5e10b73bdb541284371b64c1dc7";

  const getWeather_Info = async () => {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&unit=metric`);
    const data = await response.json();
    // console.log(data);

    let result = {
      city: data.name,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description
    };
    setWeatherData(result);
    // console.log(result)
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather_Info();
    setCity("");
  };


  return (
    <div className='searchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button
          id="searchbtn"
          variant="contained"
          type='submit'
          endIcon={<SearchIcon />}>
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
