import React from "react"
import TimeAndDate from "./TimeAndDate.js";
import WeatherIcon from "./WeatherIcon.js"
import CurrentTemperature from "./CurrentTemperature.js"
export default function WeatherInfo(props) {

    return (   
        <div className="WeatherInfo"> 
            <div className="row ml-2">
                <div className="col-6">
                   <WeatherIcon code={props.data.icon}  />
                   <CurrentTemperature celciusTemp={props.data.temperature} />
                   
                </div> 
                <div className="col-6 ">
                 <ul>
                     <br/>
                     
                    <li>
                     Humidity: {props.data.humidity}%
                    </li>
                    <li> Wind: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>  
            <div className="row ml-2">
                    <div className="col-6">
                        <h1>{props.data.city}</h1>
                        <h3 className="description text-capitalize">{props.data.description}</h3>
                    </div>    
                    <TimeAndDate />
            </div>
        </div>
)
}