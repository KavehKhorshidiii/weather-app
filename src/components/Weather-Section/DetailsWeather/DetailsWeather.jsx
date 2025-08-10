import React from "react"
import { FaWind } from "react-icons/fa"
import { IoWater } from "react-icons/io5"
import { TbGrain } from "react-icons/tb"

export default function DetailsWeather() {
   return (
      <div className=" flex flex-col w-3/10  h-full justify-around ">
         <div className="flex flex-col justify-center items-center">
            <FaWind className=" text-white text-2xl"></FaWind>
            <span className=" text-white text-3xl">9 km/h</span>
            <span className=" text-white">Wind</span>
         </div>
         <div className="flex flex-col justify-center items-center">
            <IoWater className=" text-white text-2xl"></IoWater>
            <span className=" text-white text-3xl">31%</span>
            <span className=" text-white">Humidity</span>
         </div>
         <div className="flex flex-col justify-center items-center">
            <TbGrain className=" text-white text-2xl"></TbGrain>
            <span className=" text-white text-3xl">93%</span>
            <span className=" text-white">Chance of rain</span>
         </div>
      </div>
   )
}
