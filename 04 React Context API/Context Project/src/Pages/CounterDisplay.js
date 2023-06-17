import React, { useState } from 'react'
import Count from '../component/Count'
import { countContext } from '../context/countContext';

const CounterDisplay = () => {
  let [count, setCount] = useState(0)
  return (
    <>
      <countContext.Provider value={{count, setCount}}>
        
        <Count /> 

      </countContext.Provider>
    </>
  )
}

export default CounterDisplay