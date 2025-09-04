import { useState } from 'react';
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = "175302f57e4045097fd454884eb3be70";

  const searchCity = () => {
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(apiData => {
        console.log("Full API Response:", apiData);
        setData(apiData);
      })
      .catch(err => console.error("API Error:", err));
    setCity("")

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-400 flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Weather App</h1>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="p-2 rounded-l-md border-2 border-white focus:outline-none text-2xl font-bold"
        />
        <button
          onClick={searchCity}
          className="p-2 bg-white text-black-600 font-bold rounded-r-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </div>

      {data ? (
        <div className="bg-white bg-opacity-50 rounded-xl p-6 shadow-lg flex flex-col items-center w-80 text-center">
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="w-24 h-24"
          />
          <p className="text-xl font-semibold">{data.main.temp} °C</p>
          <p className="capitalize">{data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="text-white mt-6 text-lg">No data yet</p>
      )}
    </div>
  )
}

export default App;
