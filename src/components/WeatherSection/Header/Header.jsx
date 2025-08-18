import { useEffect, useState } from "react"
import { IoLocationSharp } from "react-icons/io5"
import { IoSearch } from "react-icons/io5"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { MyContext } from "../../../myContext/myContextProvider"
import Spinner from "../../../Spinner/Spinner"

export default function Header() {
    //context app
    const { setCoords, ConfirmedCity, setConfirmedCity, setError } = useContext(MyContext)
    const [cityName, setCityName] = useState("")
    const [cityNameBoxVisible, setCityNameBoxVisible] = useState(true)
    const [locationSearch, setLocationSearch] = useState(null)
    // Fetch weather data using React Query
    const { isLoading, data, error } = useQuery({
        queryKey: ["locationName", locationSearch],
        queryFn: () => fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit=5&appid=635afb9504c0f920b54fd97746f11cf3`).then((res) => res.json()),
        enabled: !!locationSearch,
    })
    // Handle error
    useEffect(() => {
        if (error) {setError(true)}
    }, [error , setError])
    // Save city to localStorage
    const localStorageCitiesData = (city, country, lat, lon) => {
        let myLocalStorageCities = JSON.parse(localStorage.getItem("searchCities")) || []

        const hasCity = myLocalStorageCities.some((item) => item.city === city)

        if (!hasCity) {
            localStorage.setItem("searchCities", JSON.stringify([{ city: city, country: country, lat: lat, lon: lon }, ...myLocalStorageCities]))
        }
    }
    // key down handler 
    const onkeydownFunc = (e) => {
        if (e.code === "Enter") {
            setLocationSearch(e.target.value)
            setCityNameBoxVisible(false)
            setCityName("")
        }
    }

    return (
        <div className="items-center flex justify-between">
            <div className="w-4/10 md:w-3/10 flex justify-start items-center gap-1 text-white">
                <IoLocationSharp className="text-2xl md:text-3xl"></IoLocationSharp>
                <span className="text-md md:text-xl">{isLoading ? <Spinner></Spinner> : ConfirmedCity ? `${ConfirmedCity.city} - ${ConfirmedCity.country}` : "Your City"}</span>
            </div>

            {/* City search input */}
            <div className="w-6/10 z-10 md:w-7/10 relative flex justify-center items-center gap-1 text-white">
                <input
                    onKeyDown={onkeydownFunc} //
                    placeholder="Enter your City Name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className=" placeholder:text-sm text-start md:placeholder:text-xl border-1 focus:inset-shadow-white focus:inset-shadow-sm outline-none px-2 pb-[3px] md:pb-[5px] text-base md:text-2xl rounded-2xl w-full h-12 md:h-16 "
                    type="text"
                />
                <button
                    onClick={() => {
                        setLocationSearch(cityName)
                        setCityNameBoxVisible(false)
                    }}
                    className=" absolute text-3xl right-5"
                >
                    <IoSearch className=" text-2xl md:text-3xl"></IoSearch>
                </button>
                
                <div
                    className={`${
                        cityNameBoxVisible ? "hidden" : "block"
                    } backdrop-blur-xl px-2 shadow-2xl font-bold flex gap-2 top-full flex-col absolute border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] w-1/2 items-center rounded-b-2xl`}
                >
                    {data   //Search result dropdown 
                        ? data.map((item) => (
                              <span
                                  key={item.lat}
                                  onClick={() => {
                                      setCityNameBoxVisible(true)
                                      setConfirmedCity({ city: item.name, country: item.country })
                                      setCoords({ lat: item.lat, lon: item.lon })
                                      setCityName("")
                                      localStorageCitiesData(item.name, item.country, item.lat, item.lon)
                                  }}
                              >
                                  {item.name} - {item.country}
                              </span>
                          ))
                        : null}
                </div>
            </div>
            {/* Overlay to close dropdown */}
            <div onClick={() => setCityNameBoxVisible(true)} className={` ${cityNameBoxVisible ? "hidden" : "block"} absolute z-0 inset-0`}></div>
        </div>
    )
}
