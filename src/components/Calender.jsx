import React from 'react'

import { generateDate, cn } from '../utils/calender'

const Calender = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    
  return (
    <div className='w-96 h-96'>
        <div className='w-full grid grid-cols-7'>
            {days.map((day, index) => (
                <h1 key={index} className='h-14 grid place-content-center text-sm'>{day}</h1>
            ) )}
        </div>
        <div className='w-full grid grid-cols-7'>
        {generateDate().map(({ date, currentMonth, today }, index) => (
            <div key={index} className='h-14 border-t grid place-content-center text-sm'>
                <h1 className={cn(!currentMonth ? "text-gray-400" : "", today ? "bg-red-600 text-white" : "",
                "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer")}>{date.date()}</h1>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Calender