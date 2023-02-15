import React from 'react';
import dayjs from "dayjs";


export default function SingleCardComponents({ item, className, onClick }) {

    const weekdayIndex = dayjs.unix(item.dt).day();
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return (
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                <img className="day-icon" alt="Days"
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
                <span className="day-name">{WEEKDAYS[weekdayIndex]}</span>
                <span className="day-temp">{Math.round(item.temp.max)}°C</span>
            </li>
        </>
    )
}

