import { useEffect, useState } from "react"
import Spinner from "../../../Spinner/Spinner"
import Counter from "../../../hooks/Counter"
import { IoSearch } from "react-icons/io5"

export default function ShowWeather({ weatherData, loadingWeatherData }) {
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
        if (weatherData) {
            setTemp(Math.floor(weatherData.main.temp))
            setWeatherConditions(weatherData.weather[0].main)
            setIconCode(weatherData.weather[0].icon)
        } else {
            setTemp(null)
            setWeatherConditions(null)
            setIconCode(null)
        }
    }, [weatherData])

    return (
        <div className=" w-7/10 flex flex-col justify-center items-center">
            <div className=" flex flex-col items-center">
                
                <span className=" text-white font-bold text-8xl md:text-9xl">{<Counter timerSpeed={50} targetNumber={Temp}></Counter>}</span>

                {loadingWeatherData ? (
                    <Spinner></Spinner>
                ) : (
                    <>
                        {Temp !== null ? <span className=" text-white font-bold text-2xl md:text-7xl">Today</span> : null}

                        <span className=" text-white flex items-center text-3xl">
                            {WeatherConditions}
                            {iconUrl ? (
                                <img className="size-20" src={iconUrl} alt="weather-img" />
                            ) : (
                                <div className=" flex flex-col justify-center items-center">
                                    <span className=" font-bold text-4xl xl:text-7xl md:text-5xl">Welcome</span>
                                    <span className="text-lg md:text-xl xl:text-2xl flex justify-center items-center ">
                                        Enter your city name please
                                        <IoSearch></IoSearch>
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
