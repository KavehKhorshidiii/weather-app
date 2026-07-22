import ErrorAlert from "./ErrorAlert/ErrorAlert"
import MainSection from "./components/MainSection/MainSection"
import Topbar from "./components/Topbar/Topbar"
import WeatherSection from "./components/WeatherSection/WeatherSection"
import MyContextProvider from "./MyContext/myContextProvider"

export default function App() {
    return (
        <MyContextProvider>
            {/* Root layout container with unified background - full-height viewport */}
            <div className="md:flex md:flex-row-reverse h-screen bg-white dark:bg-black ">

                {/* complementary content - Right Container */}
                <aside className=" md:order-1 md:w-7/12">
                    <WeatherSection />
                </aside>

                {/* MainSection - Left Container */}
                <main className=" md:order-2 pt-2 px-5 bg-white dark:bg-black md:px-12 md:w-5/12 md:overflow-y-auto">
                    {/* Sticky Topbar  */}
                    <header className="sticky z-20 top-0 py-3">
                        <Topbar/>
                    </header>
                    {/* Main menu and routed pages */}
                    <section>
                        <MainSection/>
                    </section>
                </main>

                {/* Error Alert */}
                <ErrorAlert/>

            </div>
        </MyContextProvider>
    )
}
