import React from "react"
import { TiWeatherSnow } from "react-icons/ti"

export default function home() {
    return (
        <div className=" text-amber-50 bg-white dark:bg-black h-full">
            <span className=" py-10 flex justify-center items-center">
                <span className=" xl:text-5xl text-4xl font-bold bg-gradient-to-l from-weather-start via-weather-mid to-weather-end bg-clip-text text-transparent">MyWEATHER</span>
                <TiWeatherSnow className=" animate-Rotate text-weather-start xl:text-7xl text-5xl"></TiWeatherSnow>
            </span>

            <span className=" pb-9 flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-weather-end">Short Description</span>
                <span className=" text-justify text-base md:text-xl text-black dark:text-sky-100">With MyWEATHER, you can check live weather conditions for any city and get forecasts for upcoming days.</span>
            </span>

            <span className=" py-9 flex flex-col">
                <span className=" text-xl md:text-2xl font-bold text-weather-end">Quick Guide</span>
                <span className=" flex flex-col text-justify text-base md:text-xl text-black dark:text-sky-100">
                    <span>1. Enter your city name in the search bar above.</span>
                    <span>2. Click the search icon.</span>
                    <span>3. View the weather details instantly.</span>
                </span>
            </span>

            <span className="pt-9 flex flex-col">
                <span className=" text-xl md:text-2xl font-bold text-weather-end">Key Features</span>
                <span className=" flex flex-col text-justify text-base md:text-xl text-black dark:text-sky-100">
                    <span>. Accurate Temperature</span>
                    <span>. Wind Speed</span>
                    <span>. Rain Forecast</span>
                    <span>. Worldwide City Support</span>
                    <span>. History Section</span>
                </span>
            </span>

            <div className="flex  py-20 justify-center">
                <span className=" text-sm md:text-md font-bold text-weather-end">"AFTER EVERY STORM , THE SKY TURNS BLUE AGAIN"</span>
            </div>

            <div className="pb-15 text-justify text-black dark:text-sky-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic temporibus perspiciatis. A enim fugit est neque necessitatibus ad eveniet nostrum consectetur error ducimus ea
                suscipit, adipisci eaque quos asperiores dolorum facere voluptate omnis incidunt libero! Qui distinctio vel autem eaque labore quis et, exercitationem fuga commodi repellendus nam
                ullam voluptatum reprehenderit corrupti, assumenda, repellat cupiditate maiores voluptatem eum optio. Iusto quae odio, ea quis corrupti ullam, in, quo eos ipsa labore soluta non fuga?
                Dolores hic est quam omnis, eveniet quos autem harum quo neque, incidunt similique inventore culpa voluptates, id nihil a error. Recusandae consectetur sapiente distinctio fugit.
            </div>
        </div>
    )
}
