import React from "react"
import { MdDarkMode } from "react-icons/md"
import { TiWeatherSnow } from "react-icons/ti"
import { RiLinksLine } from "react-icons/ri"
import { GoHomeFill } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"
import { FaHistory } from "react-icons/fa";



export default function Menu() {

    if(localStorage.getItem("lightMode")){
        document.documentElement.classList.add(localStorage.getItem("lightMode"))
        document.documentElement.classList.remove(localStorage.getItem("lightMode") === "light" ? "dark" : "light")
    }
    

    const LightMode = () => {

        if(document.documentElement.classList.value === "dark"){
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
            localStorage.setItem("lightMode" , "light")
        }else{
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            localStorage.setItem("lightMode" , "dark")
        }

    }



    return (
        <div className="flex items-center border-2 justify-between p-2 rounded-4xl text-black dark:text-amber-50">
            <div className=" flex justify-around w-full">
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end" : null)} to="/">
                    <div className="Home">
                        <GoHomeFill className=" hover:text-weather-mid text-3xl"></GoHomeFill>
                    </div>
                </NavLink>
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end flex justify-center items-center" : 'flex justify-center items-center')} to="/profile">
                    <div className="profile">
                        <FaHistory className="hover:text-weather-mid text-2xl"></FaHistory>
                    </div>
                </NavLink>
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end" : null)} to="/links">
                    <div className="Links">
                        <RiLinksLine className="hover:text-weather-mid text-3xl"></RiLinksLine>
                    </div>
                </NavLink>
                <div className="DarkMode">
                    <MdDarkMode onClick={LightMode} className="hover:text-weather-mid text-3xl"></MdDarkMode>
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
