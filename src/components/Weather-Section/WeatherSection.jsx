import Header from "./Header/Header"
import ShowWeather from "./ShowWeather/ShowWeather"
import DetailsWeather from "./DetailsWeather/DetailsWeather"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"


import { useContext } from "react"  //
import { MyContext } from "../../myContext/myContextProvider"


export default function WeatherSection() {

    const {coords, setCoords} = useContext(MyContext) 
    const [weatherData, setWeatherData] = useState(null)
    const [loadingWeatherData, setLoadingWeatherData] = useState(false)
    

    const { data, isLoading } = useQuery({
        queryKey: ["weather", coords],
        queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=635afb9504c0f920b54fd97746f11cf3&units=metric`).then((res) => res.json()),
        enabled: !!coords,
    })

    useEffect(() => {
        if (data) {
            setWeatherData(data)
        }else{
            setWeatherData(null)
        }
    }, [data])

    useEffect(() => {
        if (isLoading) {
            setLoadingWeatherData(isLoading)
        }else{
            setLoadingWeatherData(false)
        }
    }, [isLoading])


    return (
        <div className=" h-screen justify-between bg-white dark:bg-black">
            <div className=" p-10 bg-gradient-to-l from-weather-start via-weather-mid to-weather-end rounded-l-weather flex flex-col h-full">
                <div className=" ">
                    <Header></Header> 
                </div>
                <div className=" h-full flex py-20 ">
                    <DetailsWeather loadingWeatherData={loadingWeatherData} DataWeather={weatherData}></DetailsWeather>
                    <ShowWeather loadingWeatherData={loadingWeatherData} DataWeather={weatherData}></ShowWeather>
                </div>
            </div>
        </div>
    )
}

//h-screen w-80 bg-amber-200 border-2 border-black
