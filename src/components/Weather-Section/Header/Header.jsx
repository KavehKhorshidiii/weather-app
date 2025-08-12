import React, { useState } from "react"
import { IoLocationSharp } from "react-icons/io5"
import { IoSearch } from "react-icons/io5"
import { useQuery } from "@tanstack/react-query"

export default function Header({ isCoords }) {
    const [cityName, setCityName] = useState("")
    const [locationSearch, setLocationSearch] = useState()
    const [CityNameBoxVisible, setCityNameBoxVisible] = useState(true)
    const [ConfirmedCity, setConfirmedCity] = useState()

    const { isLoading, data } = useQuery({
        queryKey: ["locationName", locationSearch],
        queryFn: () => fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationSearch}&limit=5&appid=635afb9504c0f920b54fd97746f11cf3`).then((res) => res.json()),
        enabled: !!locationSearch,
    })

    return (
        <div className="items-center flex gap-20 justify-between">


             <div className=" flex justify-center w-3/10 items-center gap-1 text-white">
                <IoLocationSharp className="text-3xl"></IoLocationSharp>
                <span className="text-3xl">{isLoading ? "loading..." : ConfirmedCity ? `${ConfirmedCity.city} - ${ConfirmedCity.country}` : "Your City"}</span>
            </div>

            <div className=" relative flex justify-center w-7/10 items-center gap-1 text-white">
                <input
                    placeholder="Enter your City Name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="placeholder:text-xl border-2 focus:border-4 outline-none px-5 pb-1 text-2xl rounded-2xl w-full h-16 "
                    type="text"
                />
                <button
                    onClick={() => {
                        setLocationSearch(cityName)
                        setCityNameBoxVisible(false)
                    }}
                    className=" absolute text-3xl right-5"
                >
                    <IoSearch></IoSearch>
                </button>
                <div className={`${CityNameBoxVisible ? "hidden" : "block"}  flex top-full flex-col absolute border-l-2 border-r-2 border-b-2 w-1/2 items-center rounded-b-2xl`}>
                    {data
                        ? data.map((item) => (
                              <span
                                  className=""
                                  onClick={() => {
                                      setCityNameBoxVisible(true)
                                      setConfirmedCity({ city: item.name, country: item.country })
                                      setCityName("")
                                      isCoords({ lat: item.lat, lon: item.lon })
                                  }}
                                  key={item.name}
                              >
                                  {item.name} - {item.country}
                              </span>
                          ))
                        : null}
                </div>
            </div>
        </div>
    )
}
