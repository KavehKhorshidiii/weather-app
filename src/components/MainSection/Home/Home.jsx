import { TiWeatherSnow } from "react-icons/ti"

export default function Home() {
   return (
      <main className="text-amber-50 py-9 bg-white dark:bg-black h-full">
         {/* App logo with snow icon  */}
         <header className="py-10 flex justify-center items-center">
            <h1 className="xl:text-5xl text-4xl font-bold bg-gradient-to-l from-weather-start via-weather-mid to-weather-end bg-clip-text text-transparent">MyWEATHER</h1>
            <TiWeatherSnow className="text-weather-start xl:text-7xl text-5xl" />
         </header>
         {/*Short description about the app */}
         <section className="pb-9 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-weather-end">Short Description</h2>
            <p className="text-justify text-base md:text-xl text-black dark:text-sky-100">
               With MyWEATHER, you can check live weather conditions for any city and get forecasts for upcoming days.
            </p>
         </section>
         {/* Quick guide for users */}
         <section className="py-9 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-weather-end">Quick Guide</h2>
            <ol className="list-decimal ml-4 text-base md:text-xl text-black dark:text-sky-100">
               <li>Enter your city name in the search bar above.</li>
               <li>Click the search icon.</li>
               <li>View the weather details instantly.</li>
            </ol>
         </section>
         {/* Key features of the app */}
         <section className="pt-9 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-weather-end">Key Features</h2>
            <ul className="list-disc ml-4 text-base md:text-xl text-black dark:text-sky-100">
               <li>Accurate Temperature</li>
               <li>Wind Speed</li>
               <li>Rain Forecast</li>
               <li>Worldwide City Support</li>
               <li>History Section</li>
            </ul>
         </section>
         {/* Motivational quote */}
         <section className="flex py-20 justify-center">
            <blockquote className="text-xs md:text-xl font-bold text-weather-end">"AFTER EVERY STORM, THE SKY TURNS BLUE AGAIN"</blockquote>
         </section>
         {/* additional description */}
         <section className="pb-15 text-justify text-black dark:text-sky-100">
            <p>
               MyWEATHER is designed to provide you with the most accurate and up-to-date weather information.
               Whether you're planning a trip, heading to work, or just curious about the day ahead, our app
               delivers real-time data straight from reliable meteorological sources. With support for thousands
               of cities worldwide, you can stay informed about temperature changes, wind patterns, and
               precipitation forecasts. Our intuitive interface makes it easy to switch between locations and
               view detailed weather metrics at a glance. Start your day with confidence, knowing exactly what
               the weather has in store for you.
            </p>
         </section>
      </main>
   )
}
