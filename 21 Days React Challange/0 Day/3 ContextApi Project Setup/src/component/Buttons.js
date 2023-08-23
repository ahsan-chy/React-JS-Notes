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

export default Buttons