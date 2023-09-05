<<<<<<< HEAD
import React, { useContext } from 'react'
import { countContext } from '../context/countContext';

const Buttons = () => {

const {setCount} = useContext(countContext);

  return (
    <button 
    onClick={ () => {
        setCount(count => count+1) 
    }}
    className="btn btn-success"
    >Increment Button</button>
  )
}

=======
import React, { useContext } from 'react'
import { countContext } from '../context/countContext';

const Buttons = () => {

const {setCount} = useContext(countContext);

  return (
    <button 
    onClick={ () => {
        setCount(count => count+1) 
    }}
    className="btn btn-success"
    >Increment Button</button>
  )
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default Buttons