'use client'
import { useState, useEffect } from "react";
import styles from "../page.module.css";

type Location = {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  
  type Condition = {
    text: string;
    icon: string;
    code: number;
  };
  
  type CurrentWeather = {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    // Other properties related to current weather
  };
  
  type WeatherData = {
    location: Location;
    current: CurrentWeather;
  };


export default function Weather() {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeather = async () => {
        try {
          // console.log('fetching weather data for city', 'Reykjavik')
          const response = await fetch('/api/weather?city=Reykjavik'); 
          // console.log('Response status:', response.status);

          if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
          
          } else {

          const data = await response.json();
          setWeatherData(data as WeatherData);  //have to assert the type of Data
          console.log('Fetched data:', data);
          
          }

          } catch (error) {
            console.log('Fetching weather failed', error);
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
      fetchWeather();     
    }, []); // Empty dependency array ensures this runs once on mount


  return (
    <main className={styles.main}>
      <h1>Weather</h1>
      {/* <button onClick={fetchWeather}>FETCH WEATHER</button> */}
      {weatherData && (
        <div>
          <p>City: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          {/* Add other relevant weather data */}
        </div>
      )}
    </main>
  );
}
  
