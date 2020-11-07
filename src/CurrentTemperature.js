import React, {useState} from "react";

export default function CurrentTemperature(props) {
const [units, setUnits] = useState("metric");

function showFahrenheit(event) {
    event.preventDefault() 
    setUnits("imperial")
}
function showCelcius(event) {
    event.preventDefault()
    setUnits("metric")
}


if (units === "metric") {
return ( 
        <div className="CurrentTemperature">
                    <span className="temperature">{props.celciusTemp}</span>
                    <span className="unit">{" "}ºC</span> |
                    <span className="unit"><a href="/" onClick={showFahrenheit}> ºF </a></span>
        </div>
                )
}

else {
    let fahrenheitTemperature = Math.round((props.celciusTemp * 9 / 5) + 32); 
    return( 
        <div className="CurrentTemperature">
                    <span className="temperature">{fahrenheitTemperature}</span>
                    <span className="unit"><a href="/" onClick={showCelcius}>{" "} ºC</a></span> |
                    <span className="unit"> ºF</span>
        </div>
                )
}



}