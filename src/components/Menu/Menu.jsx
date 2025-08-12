import React from "react"
import { MdDarkMode } from "react-icons/md"
import { TiWeatherSnow } from "react-icons/ti"
import { FaUserAlt } from "react-icons/fa"
import { RiLinksLine } from "react-icons/ri"
import { GoHomeFill } from "react-icons/go"

export default function Menu() {
    return (
        <div className="flex items-center border-2 justify-between p-2 rounded-4xl text-amber-50">
            <div className=" flex justify-around w-full">
                <div className="Home">
                    <GoHomeFill className=" text-2xl"></GoHomeFill>
                </div>
                <div className="profile">
                    <FaUserAlt className=" text-xl"></FaUserAlt>
                </div>
                <div className="Links">
                    <RiLinksLine className=" text-2xl"></RiLinksLine>
                </div>
                <div className="DarkMode">
                    <MdDarkMode className=" text-2xl"></MdDarkMode>
                </div>
            </div>
            <div className="LogoApp p-2 rounded-3xl bg-gradient-to-l from-weather-start via-weather-mid to-weather-end  flex text-2xl items-center">
                <span className="">MyWEATHER</span>
                <TiWeatherSnow className=" text-3xl" />
            </div>
        </div>
    )
}
