import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = (props) => {

    const [temperature, setTemperature] = useState('loading...');
    const [weatherIcon, setWeatherIcon] = useState('loading...');
    const [wind, setWind] = useState('loading...');

    useEffect(() => {
        // Get weather data from Weatherstack
        axios.get('http://api.weatherstack.com/current', {params: {access_key: process.env.REACT_APP_WEATHERSTACK_KEY, query: props.location}})
        .then((res) => {
            setTemperature(<span>{res.data.current.temperature}C&deg;</span>);
            setWeatherIcon(<img src={res.data.current.weather_icons[0]} alt="weather icon"/>)
            setWind(<span>{res.data.current.wind_speed} mph, direction: {res.data.current.wind_dir}</span>)
        })
    },[]);

    return(
        <div>
            <h3>Weather in {props.location}</h3>
            <p>temperature: {temperature}</p>
            {weatherIcon}
            <p>{wind}</p>
        </div>
    )
}

export default Weather;