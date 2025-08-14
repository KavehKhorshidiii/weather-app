import MenuSection from "./components/Menu-Section/MenuSection"
import Menu from "./components/Menu/Menu"
import WeatherSection from "./components/Weather-Section/WeatherSection"
import MyContextProvider from "./myContext/myContextProvider"

export default function App() {
    return (
        <MyContextProvider>
            <div className="h-screen bg-white dark:bg-black flex">
                <div className="w-4/10 px-12 pt-2 overflow-auto ">
                    <div className=" sticky top-0 py-3 ">
                        <Menu></Menu>
                    </div>
                    <div className="">
                        <MenuSection />
                    </div>
                </div>

                <WeatherSection />
            </div>
        </MyContextProvider>
    )
}
