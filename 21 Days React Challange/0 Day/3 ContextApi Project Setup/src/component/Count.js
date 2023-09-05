<<<<<<< HEAD
import React, { useContext } from 'react'
import Buttons from './Buttons';
import { countContext } from '../context/countContext';

const Count = () => {
  const {count} = useContext(countContext);
  return (
    <>
        <div className="container my-5 d-flex justify-content-center">
            <h1
                className='text-success mx-4'
            >{count}</h1> &nbsp;
            <Buttons/>
        </div>   
    </>
  )
}

=======
import React, { useContext } from 'react'
import Buttons from './Buttons';
import { countContext } from '../context/countContext';

const Count = () => {
  const {count} = useContext(countContext);
  return (
    <>
        <div className="container my-5 d-flex justify-content-center">
            <h1
                className='text-success mx-4'
            >{count}</h1> &nbsp;
            <Buttons/>
        </div>   
    </>
  )
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default Count