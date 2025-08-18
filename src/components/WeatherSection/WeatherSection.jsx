import Header from "./Header/Header"
import ShowWeather from "./ShowWeather/ShowWeather"
import DetailsWeather from "./DetailsWeather/DetailsWeather"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
// context app
import { useContext } from "react"
import { MyContext } from "../../myContext/myContextProvider"

export default function WeatherSection() {
    // App context
    const { coords, setError } = useContext(MyContext)
    const [weatherData, setWeatherData] = useState(null)
    const [loadingWeatherData, setLoadingWeatherData] = useState(false)
    // Fetch weather data using React Query
    const { data, isLoading, error } = useQuery({
        queryKey: ["weather", coords],
        queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=635afb9504c0f920b54fd97746f11cf3&units=metric`).then((res) => res.json()),
        enabled: !!coords,
    })
    // Update state when data or error changes
    useEffect(() => {
        if (data) {
            setWeatherData(data)
        } else if (error) {
            setError(true)
        } else {
            setWeatherData(null)
        }
    }, [data, error, setError])
    //Update loading state
    useEffect(() => {
        setLoadingWeatherData(isLoading)
    }, [isLoading])

    return (
        <section className="md:h-screen relative justify-between bg-white dark:bg-black">
            <div className=" p-5 md:p-10 bg-gradient-to-l from-weather-start via-weather-mid to-weather-end rounded-bl-weather rounded-br-weather md:rounded-tl-weather  md:rounded-br-none  flex flex-col h-full">
                {/* Weather header */}
                    <Header/>
                {/* Main weather display */}
                <div className=" justify-center items-center h-full flex flex-col space-y-10 md:flex-row-reverse py-9 md:py-20 ">
                    <ShowWeather loadingWeatherData={loadingWeatherData} weatherData={weatherData}></ShowWeather>
                    <DetailsWeather loadingWeatherData={loadingWeatherData} weatherData={weatherData}></DetailsWeather>
                </div>
            </div>
        </section>
    )
}
