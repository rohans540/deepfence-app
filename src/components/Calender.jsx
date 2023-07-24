import React, { useState } from 'react'
import dayjs from 'dayjs';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { generateDate, cn, months } from '../utils/calender'


const Calender = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const prevHandler = () => {
        setToday(today.month(today.month() - 1))
    }

    const nextHandler = () => {
        setToday(today.month(today.month() + 1))
    }
    
  return (
    <div className='w-96 h-96'>
        <div className='flex justify-between'>
            <h1 className='font-semibold'>{months[today.month()]}, {today.year()}</h1>
            <div className='flex items-center gap-4'>
                <GrFormPrevious className='w-5 h-5 cursor-pointer' onClick={prevHandler} />
                <h1 className='cursor-pointer' onClick={() => setToday(currentDate)}>Today</h1>
                <GrFormNext className='w-5 h-5 cursor-pointer' onClick={nextHandler} />
            </div>
        </div>
        <div className='w-full grid grid-cols-7 text-gray-500'>
            {days.map((day, index) => (
                <h1 key={index} className='h-14 grid place-content-center text-sm'>{day}</h1>
            ) )}
        </div>
        <div className='w-full grid grid-cols-7'>
        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => (
            <div key={index} className='h-14 border-t grid place-content-center text-sm'>
                <h1 className={cn(!currentMonth ? "text-gray-400" : "", today ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" : "",
                selectedDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-gradient-to-r from-indigo-500 text-white" : "",
                "h-10 w-10 grid place-content-center rounded-full hover:bg-gradient-to-r from-indigo-500 hover:text-white transition-all cursor-pointer")}
                onClick={() => setSelectedDate(date)}
                >
                    {date.date()}</h1>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Calender