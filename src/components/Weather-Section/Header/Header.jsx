import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { FaCalendarAlt } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5";


export default function Header() {
   return (
      <div className="items-center flex justify-between">
         <div className=" text-white border-1 flex p-2 rounded-full justify-center items-center">
            <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
         </div>
         <div className=" flex justify-center items-center gap-1 text-white">
            <IoLocationSharp className=" text-3xl"></IoLocationSharp>
            <span className="text-3xl">Tehran</span>
         </div>
         <div className=" flex justify-center items-center gap-1 text-white">
            <FaCalendarAlt className=" text-3xl"></FaCalendarAlt>
            <span className="text-3xl">7-Days</span>
         </div>
      </div>
   )
}
