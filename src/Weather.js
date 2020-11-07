import React, {useState} from "react";
import "./Weather.css"
import axios from "axios"

import WeatherInfo from "./WeatherInfo"

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false} )
const [city, setCity] = useState(props.defaultCity)

function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
        ready: true,
        city: response.data.name, 
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        iconUrl: "www.google.com"
    })
   
}

function search() {

    const apiKey ="c1839181c76825494afbe0248f476ab5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
}

function handleSearchSubmit(event){
event.preventDefault();
search(city)
}

function handleCityChange(event) {
setCity(event.target.value)
}
    if(weatherData.ready) {
        return (
        <div className="Weather">
           
           <WeatherInfo data={weatherData}/>
                    <form onSubmit={handleSearchSubmit}>
                 <div className="row">
                     <div className="col-9">
                    <input 
                    type ="search" 
                    placeholder="Enter a city" 
                    className="form-control" 
                    onChange={handleCityChange}/>
                    </div>
                    <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                 </div>
                    </form> 
             
        </div>
    )
        } else {
  search();
    return "Loading..."


        }

    

}
