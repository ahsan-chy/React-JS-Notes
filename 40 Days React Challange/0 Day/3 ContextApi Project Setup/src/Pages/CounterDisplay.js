<<<<<<< HEAD
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

=======
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

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default CounterDisplay