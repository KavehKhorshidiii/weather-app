import React from "react"
import { ImBin } from "react-icons/im"

export default function profile() {
  
    const CitiesHistory = JSON.parse(localStorage.getItem("searchCities")) || []

    return (
        <div className="">
            <span className="pt-3 pb-6 block font-bold text-weather-end text-3xl">History</span>

            <div className="border-2 p-2 rounded-3xl border-weather-end">
                <div className=" py-2 px-4 border-white  bg-weather-end rounded-2xl  font-bold  flex">
                    <span className=" w-1/3 text-start">City</span>
                    <span className=" w-1/3 text-center">Country</span>
                </div>

                {
                CitiesHistory.map((item) => (
                    <div className=" py-3 px-4 border-white my-2">
                        <div className="text-white flex justify-between">
                            <span className=" text-start w-1/3">{item.city}</span>
                            <span className=" text-center w-1/3">{item.country}</span>
                            <span className=" text-end w-1/3 text-pink-800">
                                <button>
                                    <ImBin></ImBin>
                                </button>
                            </span>
                        </div>
                    </div>
                ))}

                {/* <div className=" py-3 px-4 border-white my-2">
                    <div className="text-white flex justify-between">
                        <span className=" text-start w-1/3">Qom</span>
                        <span className=" text-center w-1/3">IR</span>
                        <span className=" text-end w-1/3 text-pink-800">
                            <button>
                                <ImBin></ImBin>
                            </button>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
