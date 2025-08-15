import React, { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5"
import Counter from "../../../hooks/Counter"
import Spinner from "../../../spinner/spinner"

export default function ShowWeather({ DataWeather, loadingWeatherData }) {
    const [Temp, setTemp] = useState(null)
    const [WeatherConditions, setWeatherConditions] = useState(null)
    const [iconCode, setIconCode] = useState(null)
    const [iconUrl, setIconUrl] = useState(null)

    useEffect(() => {
        if (iconCode) {
            setIconUrl(`https://openweathermap.org/img/wn/${iconCode}@2x.png`)
        } else {
            setIconUrl(null)
        }
    }, [iconCode])

    useEffect(() => {
        if (DataWeather) {
            setTemp(Math.floor(DataWeather.main.temp))
            setWeatherConditions(DataWeather.weather[0].main)
            setIconCode(DataWeather.weather[0].icon)
        } else {
            setTemp(null)
            setWeatherConditions(null)
            setIconCode(null)
        }
    }, [DataWeather])

    return (
        <div className=" w-7/10 border-l-1 flex flex-col justify-center items-center border-white/80">
            <div className=" flex flex-col items-center">
                <span className=" text-white font-bold text-9xl">{<Counter timerSpeed={50} targetNumber={Temp}></Counter>}</span>

                {loadingWeatherData ? (
                    <Spinner></Spinner>
                ) : (
                    <>
                        {Temp !== null ? <span className=" text-white font-bold text-7xl">Today</span> : null}

                        <span className=" text-white flex items-center text-3xl">
                            {WeatherConditions}
                            {iconUrl ? (
                                <img className="size-20" src={iconUrl} alt="weather-img" />
                            ) : (
                                <div className=" flex flex-col justify-center items-center">
                                    <span className=" font-bold text-7xl">Welcome</span>
                                    <span className=" flex justify-center items-center text-xl">
                                        Enter your city name please<IoSearch></IoSearch>
                                    </span>
                                </div>
                            )}
                        </span>
                    </>
                )}

                
            </div>
        </div>
    )
}
