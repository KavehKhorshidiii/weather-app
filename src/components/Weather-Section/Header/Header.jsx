import React, { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { IoSearch } from "react-icons/io5"

export default function Header() {

   const [cityName, setCityName] = useState()

   const [locationSearch, setLocationSearch] = useState()


   return (
      <div className="items-center flex justify-between">
         <div className=" text-white border-2 flex p-2 rounded-full justify-center items-center">
            <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
         </div>
         <div className=" flex relative justify-center w-1/2 items-center gap-1 text-white">
            <input onChange={(e)=>setCityName(e.target.value)} className=" border-2 focus:border-4 outline-none px-5 text-3xl rounded-2xl w-full h-15" type="text" />
            <button onClick={()=>setLocationSearch(cityName)} className=" absolute text-3xl right-5">
               <IoSearch></IoSearch>
            </button>
         </div>
         <div className=" flex justify-center items-center gap-1 text-white">
            <IoLocationSharp className=" text-3xl"></IoLocationSharp>
            <span className="text-3xl">{locationSearch ? locationSearch : "Location"}</span>
         </div>
      </div>
   )
}
