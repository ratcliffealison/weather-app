import React from "react";

export default function TimeAndDate() {
   function formatDate() {
        let now = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    if (date === 1 || date === 21 || date === 31) {
      return `${day} ${date}st ${month}`;
    } else {
      if (date === 2 || date === 22) {
        return `${day} ${date}nd ${month}`;
      } else {
        if (date === 3 || date === 23) {
          return `${day} ${date}rd ${month}`;
        } else {
          return `${day} ${date}th ${month}`;
        }
      }
    }
  }
  function formatTime() {
    var now = new Date();
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    var timeNow = hours + ":" + minutes;
    return timeNow;
  }
  setTimeout(formatTime, 1000);
            return (
                <div className="TimeAndDate col-6">
                         <ul>
                             <li>
                             {formatDate()}
                             </li>
                            <li>
                            {formatTime()}
                            </li>
                        </ul>
                    </div>
                    ) }