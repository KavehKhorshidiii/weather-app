import React from "react"
import { MdDarkMode } from "react-icons/md"
import { TiWeatherSnow } from "react-icons/ti"
import { FaUserAlt } from "react-icons/fa"
import { RiLinksLine } from "react-icons/ri"
import { GoHomeFill } from "react-icons/go"
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div className="flex items-center border-2 justify-between p-2 rounded-4xl text-amber-50">
            <div className=" flex justify-around w-full">
                <div className="Home">
                    <Link to="/">
                        <GoHomeFill className=" text-3xl"></GoHomeFill>
                    </Link>
                </div>
                <div className="profile">
                    <Link to="/profile">
                        <FaUserAlt className=" text-2xl"></FaUserAlt>
                    </Link>
                </div>
                <div className="Links">
                    <Link to="/links">
                        <RiLinksLine className=" text-3xl"></RiLinksLine>
                    </Link>
                </div>
                <div className="DarkMode">
                    <MdDarkMode className=" text-3xl"></MdDarkMode>
                </div>
            </div>
            <Link to="/">
                <div className="LogoApp p-2 rounded-3xl bg-gradient-to-l from-weather-start via-weather-mid to-weather-end  flex text-2xl items-center">
                    <span className="">MyWEATHER</span>
                    <TiWeatherSnow className=" text-3xl" />
                </div>
            </Link>
        </div>
    )
}
