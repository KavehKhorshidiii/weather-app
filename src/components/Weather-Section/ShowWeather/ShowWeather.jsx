import React from 'react'

export default function ShowWeather() {
  return (
    <div className=' w-7/10 border-l-2 flex flex-col justify-center items-center border-white/80'>
      <div className='flex justify-center items-center'>
        <img className='size-86' src="./show weather img/cloud.png" alt="" />
      </div>
      <div className=' flex flex-col items-center'>
        <span className=' text-white font-bold text-9xl'>21</span>
        <span className=' text-white text-7xl'>Tommorow</span>
        <span className=' text-white text-4xl'>Rain - Cloudy</span>
      </div>
    </div>

  )
}
