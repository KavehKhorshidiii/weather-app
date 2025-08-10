import MenuSection from "./components/Menu-Section/MenuSection"
import WeatherSection from "./components/Weather-Section/WeatherSection"

export default function App() {
   return (
      <div className="h-screen flex">
         <MenuSection />
         <WeatherSection />
      </div>
   )
}
