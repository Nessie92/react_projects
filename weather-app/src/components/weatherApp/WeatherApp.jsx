import React from 'react'
import './weatherApp.css'
import search_icon from "../assets/Assets/search.png"
import clear_icon from "../assets/Assets/clear.png"
import cloud_icon from "../assets/Assets/cloud.png"
import drizzle_icon from "../assets/Assets/drizzle.png"
import humidity_icon from "../assets/Assets/humidity.png"
import rain_icon from "../assets/Assets/rain.png"
import snow_icon from "../assets/Assets/snow.png"
import wind_icon from "../assets/Assets/wind.png"

export const WeatherApp = () => {
    let apiKey = "be9a15edcfcc0a9c944664776367b198"

    const search = () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0]==="")
        {
            return 0
        }
    }
  return (
    <div className='container'>
        <div className='topbar'>
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">
            24°C
        </div>
        <div className="weather-location">
            London
        </div>
        <div className="data-container">
            <div className="element">
                <img src={ humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">
                        64%
                    </div>
                    <div className="text">
                        humidity
                    </div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">
                        18 km/h
                    </div>
                    <div className="text">
                        wind speed
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
