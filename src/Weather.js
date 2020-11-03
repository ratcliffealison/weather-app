import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type ="search" placeholder="Enter a city" className="form-control" /></div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" /></div>
           </div>  
           </form>    
                       
                <h1>Zaragoza</h1>
            <ul>
                <li>
                    12:56
                </li>
                <li>
                    Tuesday 3rd November
                </li>
            </ul>

<div className="row">

<div className="col-6">
Weather picture
6º
</div>
<div className="col-6">
    <ul>
        <li>
            Precipitation:
        </li>
        <li>
            Humidity
        </li>
        <li> Wind</li>
    </ul>
</div>
</div>
        </div>
    )

}
