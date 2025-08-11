import Header from "./Header/Header"
import ShowWeather from "./ShowWeather/ShowWeather"
import DetailsWeather from "./DetailsWeather/DetailsWeather"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

export default function WeatherSection() {
    const [coords, setCoords] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    
    const { data, isLoading } = useQuery({
        queryKey: ["weather", coords],
        queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=635afb9504c0f920b54fd97746f11cf3&units=metric`).then((res) => res.json()),
        enabled: !!coords,
    })

    useEffect(() => {
        if (data) {
            setWeatherData(data)
        }
    }, [data])


    return (
        <div className="w-6/10 h-screen justify-between bg-black">
            <div className=" p-10 bg-gradient-to-l from-weather-start via-weather-mid to-weather-end rounded-l-weather flex flex-col h-full">
                <div className=" ">
                    <Header isCoords={setCoords}></Header>
                </div>
                <div className=" h-full flex py-20 ">
                    <DetailsWeather></DetailsWeather>
                    <ShowWeather DataWeather={weatherData}></ShowWeather>
                </div>
            </div>
        </div>
    )
}

//h-screen w-80 bg-amber-200 border-2 border-black
