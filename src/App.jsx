import React from 'react'

import Calender from './components/Calender'
import { generateDate } from './utils/calender'

const App = () => {
  console.log(generateDate())
  return (
    <div className='flex w-1/2 mx-auto items-center'>
      <Calender />
    </div>
  )
}

export default App