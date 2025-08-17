import { ImBin } from "react-icons/im"
import { useContext, useEffect } from "react"
import { MyContext } from "../../../myContext/myContextProvider"
import { useState } from "react"
import { FaEye } from "react-icons/fa6"

export default function History() {
    const { coords, setCoords, setConfirmedCity } = useContext(MyContext) // this state

    const [CitiesHistory, setCitiesHistory] = useState([])

    useEffect(() => {
        setCitiesHistory(JSON.parse(localStorage.getItem("searchCities")) || [])
    }, [coords])

    const DeleteFun = (cityName) => {
        let filterHistory = CitiesHistory.filter((item) => item.city !== cityName)
        setCitiesHistory(filterHistory)
        localStorage.setItem("searchCities", JSON.stringify(filterHistory))
        console.log("object")
        setCoords(null)
        setConfirmedCity(null)
    }

    const SendDataWeather = (item) => {
        setCoords({ lat: item.lat, lon: item.lon })
        setConfirmedCity({ city: item.city, country: item.country })
    }

    return (
        <div className="">
            <span className="pt-3 pb-6 block font-bold text-weather-end text-xl md:text-2xl">History</span>

            <div className="border-2 p-2 rounded-3xl border-weather-end">
                <div className=" py-2 px-4 border-white  bg-weather-end rounded-2xl  font-bold  flex">
                    <span className=" w-1/3 text-start">City</span>
                    <span className=" w-1/3 text-center">Country</span>
                </div>

                {CitiesHistory.map((item) => (
                    <div key={item.city} className=" rounded-2xl py-3 px-4 border-white mt-2">
                        <div className="text-white flex justify-between">
                            <span className=" text-black dark:text-white text-start w-1/3">{item.city}</span>
                            <span className=" text-black dark:text-white text-center w-1/3">{item.country}</span>
                            <span className=" text-2xl text-end w-1/3">
                                <button className=" mr-3 rounded-full" onClick={() => SendDataWeather(item)}>
                                    <FaEye className="hover:scale-150 text-weather-end"></FaEye>
                                </button>
                                <button onClick={() => DeleteFun(item.city)}>
                                    <ImBin className=" hover:scale-150 text-red-700"></ImBin>
                                </button>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
