import Header from "./Header/Header"
import ShowWeather from "./ShowWeather/ShowWeather"
import DetailsWeather from "./DetailsWeather/DetailsWeather"

import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()



export default function WeatherSection() {

   const { isPending, error, data } = useQuery({
      queryKey: ["weather"],
      queryFn: () => fetch("http://api.openweathermap.org/geo/1.0/direct?q=tehran&limit=5&appid=635afb9504c0f920b54fd97746f11cf3").then((res) => res.json()),
   })
   console.log(data)

   return (
      <div className="w-6/10 h-screen justify-between bg-black">
         <div className=" p-10 bg-gradient-to-l from-weather-start via-weather-mid to-weather-end rounded-l-weather flex flex-col h-full">
            <div className=" ">
               <Header></Header>
            </div>
               <div className=" h-full flex py-20 ">
                  <DetailsWeather></DetailsWeather>
                  <ShowWeather></ShowWeather>
               </div>
         </div>
      </div>
   )
}

//h-screen w-80 bg-amber-200 border-2 border-black
