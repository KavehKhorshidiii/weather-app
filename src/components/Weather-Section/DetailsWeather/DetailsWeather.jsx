import React, { useEffect, useState } from "react"
import { FaWind } from "react-icons/fa"
import { IoWater } from "react-icons/io5"
import { BsCloudsFill } from "react-icons/bs"
import Counter from "../../../hooks/Counter"

export default function DetailsWeather({ DataWeather }) {
    const [WindSpeed, setWindSpeed] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [Cloudiness, setCloudiness] = useState(null)

    useEffect(() => {
        if (DataWeather) {
            setWindSpeed(Math.floor(DataWeather?.wind?.speed))
            setHumidity(DataWeather.main.humidity)
            setCloudiness(DataWeather.clouds.all)
        }else{
            setWindSpeed(null)
            setHumidity(null)
            setCloudiness(null)
        }
    }, [DataWeather])

    return (
        <div className=" flex md:border-r-1   border-white/80 flex-row md:flex-col w-3/10  h-full justify-center gap-20 md:justify-around ">
            <div className="flex flex-col justify-center items-center">
                <FaWind className=" text-3xl text-white "></FaWind>
                <span className=" text-white text-2xl md:text-3xl">{<Counter timerSpeed={80} targetNumber={WindSpeed}></Counter>}<span className="md:text-3xl text-xl">km/h</span></span>
                <span className=" text-white">Wind</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <IoWater className=" text-3xl text-white "></IoWater>
                <span className=" text-white text-2xl md:text-3xl">{<Counter timerSpeed={80} targetNumber={humidity}></Counter>}<span className="md:text-3xl text-xl">%</span></span>
                <span className=" text-white">Humidity</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <BsCloudsFill className=" text-2xl md:text-3xl text-white "></BsCloudsFill>
                <span className=" text-white text-3xl">{<Counter timerSpeed={80} targetNumber={Cloudiness}></Counter>}<span className="md:text-3xl text-xl">%</span></span>
                <span className=" text-white">Clouds</span>
            </div>
        </div>
    )
}
