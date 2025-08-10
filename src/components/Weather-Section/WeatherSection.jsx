import React from "react"
import Header from "./Header/Header"
import ShowWeather from "./ShowWeather/ShowWeather"
import DetailsWeather from "./DetailsWeather/DetailsWeather"

export default function WeatherSection() {
   return (
      <div className="w-6/10 h-screen justify-between bg-black">
         <div className=" p-10 bg-gradient-to-l from-weather-start via-weather-mid to-weather-end rounded-l-weather flex flex-col h-full">
            <div className=" ">
              <Header></Header>
            </div>
            <div className="  h-full flex py-20 ">
              <DetailsWeather></DetailsWeather>
              <ShowWeather></ShowWeather>
            </div>
         </div>
      </div>
   )
}

//h-screen w-80 bg-amber-200 border-2 border-black
