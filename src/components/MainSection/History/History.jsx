import { ImBin } from "react-icons/im"
import { useContext, useEffect } from "react"
import { MyContext } from "../../../MyContext/myContextProvider"
import { useState } from "react"
import { FaEye } from "react-icons/fa6"

export default function History() {
    // App Context
    const { coords, setCoords, setConfirmedCity } = useContext(MyContext) 

    const [CitiesHistory, setCitiesHistory] = useState([])
    // Load history from localStorage when coords changes
    useEffect(() => {
        setCitiesHistory(JSON.parse(localStorage.getItem("searchCities")) || [])
    }, [coords])
    // Delete city from history
    const deleteFun = (cityName) => {
        let filterHistory = CitiesHistory.filter((item) => item.city !== cityName)
        setCitiesHistory(filterHistory)
        localStorage.setItem("searchCities", JSON.stringify(filterHistory))
        console.log("object")
        setCoords(null)
        setConfirmedCity(null)
    }
    //Send city data to context
    const SendDataWeather = (item) => {
        setCoords({ lat: item.lat, lon: item.lon })
        setConfirmedCity({ city: item.city, country: item.country })
    }

    return (
        <section className="history-container">
            {/* History Title */}
            <h2 className="pt-3 pb-6 block font-bold text-weather-end text-xl md:text-2xl">History</h2>
            {/* History Table */}
            <div className="border-2 p-2 rounded-3xl border-weather-end">
                <div className=" py-2 px-4 border-white  bg-weather-end rounded-2xl  font-bold  flex">
                    <span className=" w-1/3 text-start">City</span>
                    <span className=" w-1/3 text-center">Country</span>
                </div>
                {/*  Table Rows  */}
                {CitiesHistory.map((item) => (
                    <div key={`${item.city}-${item.country}`} className=" rounded-2xl py-3 px-4 border-white mt-2">
                        <div className="text-white flex justify-between">
                            <span className=" text-black dark:text-white text-start w-1/3">{item.city}</span>
                            <span className=" text-black dark:text-white text-center w-1/3">{item.country}</span>
                            <span className=" text-2xl text-end w-1/3">
                                <button className=" mr-3 rounded-full" onClick={() => SendDataWeather(item)}>
                                    <FaEye className=" transition-transform cursor-pointer hover:scale-150 text-weather-end"></FaEye>
                                </button>
                                <button onClick={() => deleteFun(item.city)}>
                                    <ImBin className=" transition-transform  cursor-pointer hover:scale-150 text-red-700"></ImBin>
                                </button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
