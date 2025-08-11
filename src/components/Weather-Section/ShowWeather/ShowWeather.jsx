import React, { useEffect, useState } from "react"

export default function ShowWeather({ DataWeather }) {

    const [Temp, setTemp] = useState(null)
    const [WeatherConditions, setWeatherConditions] = useState(null)

    useEffect(() => {
        if (DataWeather) {
            setTemp(Math.floor(DataWeather.main.temp))
            setWeatherConditions(DataWeather.weather[0].main)
        }
    }, [DataWeather])

    return (
        <div className=" w-7/10 border-l-1 flex flex-col justify-center items-center border-white/80">
            <div className="flex justify-center items-center">
                <img className="size-86" src="./show weather img/cloud.png" alt="" />
            </div>
            <div className=" flex flex-col items-center">
                <span className=" text-white font-bold text-9xl">{Temp}</span>
                <span className=" text-white text-7xl">Tommorow</span>
                <span className=" text-white text-4xl">{WeatherConditions}</span>
            </div>
        </div>
        
    )
}
