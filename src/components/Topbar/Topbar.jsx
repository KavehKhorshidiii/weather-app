import { useState, useEffect } from "react"
import { MdDarkMode } from "react-icons/md"
import { TiWeatherSnow } from "react-icons/ti"
import { RiLinksLine } from "react-icons/ri"
import { GoHomeFill } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"
import { FaHistory } from "react-icons/fa"

export default function Topbar() {
    // dark mode status
    const [darkModeStatus, setDarkModeStatus] = useState(null)

    // Load saved dark/light mode from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("lightMode")

        if (savedMode) {
            document.documentElement.classList.add(savedMode)
            document.documentElement.classList.remove(savedMode === "light" ? "dark" : "light")
        }

        setDarkModeStatus(document.documentElement.classList.contains("dark") ? "dark" : "light")
    }, [])

    //toggle dark mode function
    const toggleDarkMode = () => {
        const newMode = document.documentElement.classList.contains("dark") ? "light" : "dark"
        document.documentElement.classList.remove(newMode === "light" ? "dark" : "light")
        document.documentElement.classList.add(newMode)
        localStorage.setItem("lightMode", newMode)
        setDarkModeStatus(newMode)
    }

    return (
        <div className="flex items-center dark:shadow-menu-dark shadow-menu-light backdrop-blur-sm  justify-between p-2 rounded-4xl text-black dark:text-amber-50">
            <div className=" flex justify-around w-full">
                {/* Home */}
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end" : null)} to="/">
                    <div className="Home">
                        <GoHomeFill className="hover:text-weather-mid text-3xl"></GoHomeFill>
                    </div>
                </NavLink>
                {/* History */}
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end flex justify-center items-center" : "flex justify-center items-center")} to="/profile">
                    <div className="profile">
                        <FaHistory className="hover:text-weather-mid text-2xl"></FaHistory>
                    </div>
                </NavLink>
                {/* Links */}
                <NavLink className={(Active) => (Active.isActive === true ? "text-weather-end" : null)} to="/links">
                    <div className="Links">
                        <RiLinksLine className="hover:text-weather-mid text-3xl"></RiLinksLine>
                    </div>
                </NavLink>
                {/* Dark mode */}
                <div className="DarkMode">
                    <MdDarkMode onClick={toggleDarkMode} className={`${darkModeStatus === "dark" ? "text-amber-300" : null} cursor-pointer text-3xl`}></MdDarkMode>
                </div>
            </div>
            {/* website Logo */}
            <Link to="/" className=" cursor-pointer flex justify-center items-center">
                <div className="LogoApp p-2  rounded-full xl:rounded-3xl bg-gradient-to-l from-weather-start via-weather-mid to-weather-end  flex justify-center text-2xl items-center">
                    <span className="xl:block hidden text-lg xl:text-2xl">MyWEATHER</span>
                    <TiWeatherSnow viewBox="0 0 25 25" className=" text-center animate-WeatherSnow text-4xl" />
                </div>
            </Link>
        </div>
    )
}
