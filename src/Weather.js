import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
              
            <div className="row">
                <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/fog.png" alt="foggy"/>

             <span className="temperature">6</span>
             <span className="unit"><a className="metric">ºC</a></span> |
             <span className="unit"><a className="imperial"> ºF</a></span>
                </div> 
                <div className="col-6 ">
                 <ul>
                     <li>
                     Precipitation: 20%
                    </li>
                    <li>
                     Humidity: 12%
                    </li>
                    <li> Wind: 25km/h</li>
                    </ul>
                    </div>
                </div>  
                 <div className="row ml-2">
                    <div className="col-6">
                        <h1>Zaragoza</h1>
                        <h3 className="description">Foggy</h3>
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

}
