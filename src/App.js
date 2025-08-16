import MenuSection from "./components/Menu-Section/MenuSection"
import Menu from "./components/Menu/Menu"
import WeatherSection from "./components/Weather-Section/WeatherSection"
import MyContextProvider from "./myContext/myContextProvider"

export default function App() {
    return (
        <MyContextProvider>
            <div className=" md:flex md:flex-row-reverse h-screen  bg-black ">

                <div className="md:w-7/12">
                    <WeatherSection />
                </div>

                <div className="md:w-5/12 dark:bg-black bg-white px-5 md:px-12 pt-2 md:overflow-auto ">
                    <div className=" sticky top-0 py-3 ">
                        <Menu></Menu>
                    </div>
                    <div className=" py-10">
                        <MenuSection />
                    </div>
                </div>

            </div>
        </MyContextProvider>
    )
}
