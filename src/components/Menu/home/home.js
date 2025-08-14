import React from 'react'
import { TiWeatherSnow } from "react-icons/ti"

export default function home() {
  return (
     <div className=" text-amber-50 bg-white dark:bg-black h-full">
                <span className=" py-14 flex justify-center items-center">
                    <span className=" text-6xl font-bold bg-gradient-to-l from-weather-start via-weather-mid to-weather-end bg-clip-text text-transparent">MyWEATHER</span>
                      <TiWeatherSnow className=" animate-Rotate text-weather-start text-7xl"></TiWeatherSnow>
                </span>
    
    
    
                <span className=" pb-9 flex flex-col">
                    <span className=" text-xl font-bold text-weather-end">Short Description</span>
                    <span className=" text-justify text-xl line-clamp-3 text-black dark:text-sky-100">With MyWEATHER, you can check live weather conditions for any city and get forecasts for upcoming days.</span>
                </span>
    
                <span className=" py-9 flex flex-col">
                    <span className=" text-xl font-bold text-weather-end">Quick Guide</span>
                    <span className=" flex flex-col text-justify text-xl line-clamp-3 text-black dark:text-sky-100">
                        <span>1. Enter your city name in the search bar above.</span>
                        <span>2. Click the search icon.</span>
                        <span>3. View the weather details instantly.</span>
                    </span>
                </span>
    
                <span className="py-9 flex flex-col">
                    <span className=" text-xl font-bold text-weather-end">Key Features</span>
                    <span className=" flex flex-col text-justify text-xl line-clamp-3 text-black dark:text-sky-100">
                        <span>. Accurate Temperature</span>
                        <span>. Wind Speed</span>
                        <span>. Rain Forecast</span>
                        <span>. Worldwide City Support</span>
                        <span>. History Section</span>
                    </span>
                </span>
    
                <div className="flex  pt-10 justify-center">
                    <span className=" text-md font-bold text-weather-end">"AFTER EVERY STORM , THE SKY TURNS BLUE AGAIN"</span>
                </div>
            </div>
  )
}
