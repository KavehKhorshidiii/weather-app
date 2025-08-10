import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


export default function Header() {
  return (
    <div className=' border-2 flex justify-between h-10'>
      <div className=' text-white'>
        logo
      </div>
      <div className=' text-white'>
        <span>7-Days</span>
      </div>
      <div className=' text-white'>
        <IoIosArrowBack className=''></IoIosArrowBack>
      </div>
    </div>
  )
}
