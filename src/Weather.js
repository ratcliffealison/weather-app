import React, {useState} from "react";
import "./Weather.css"
import axios from "axios"

export default function Weather() {
const [weatherData, setWeatherData] = useState({ready: false} )

function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
        ready: true,
        city: response.data.name, 
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        iconUrl: ""
    })
   
}
    if(weatherData.ready) {
        return (
        <div className="Weather">
              
            <div className="row">
                <div className="col-6">
                   <img src={weatherData.iconUrl} alt={weatherData.description}/>

             <span className="temperature">{weatherData.temperature}</span>
             <span className="unit"><a className="metric">ºC</a></span> |
             <span className="unit"><a className="imperial"> ºF</a></span>
                </div> 
                <div className="col-6 ">
                 <ul>
                    <li>
                     Humidity: {weatherData.humidity}%
                    </li>
                    <li> Wind: {weatherData.wind}km/h</li>
                    </ul>
                    </div>
                </div>  
                 <div className="row ml-2">
                    <div className="col-6">
                        <h1>{weatherData.city}</h1>
                        <h3 className="description text-capitalize">{weatherData.description}</h3>
                    </div>    
                    <div className="col-6 timeDate">
                         <ul>
                             <li>
                             12:56
                             </li>
                            <li>
                            Tuesday 3rd November
                            </li>
                        </ul>
                    </div> 
                </div>

           
                    <form>
                 <div className="row">
                     <div className="col-9">
                    <input type ="search" placeholder="Enter a city" className="form-control" />
                    </div>
                    <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" />
                    </div>
         </div>
                    </form> 
             
        </div>
    )
        } else {

    const apiKey ="c1839181c76825494afbe0248f476ab5";
    let city= "zaragoza"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return "loading"
  

        }

    

}
