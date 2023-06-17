import React, { useRef } from 'react'
import User from './User'
import '../App.css';

const DisplayButton = () => {
    let inputRef = useRef(null)

    const updateInput = () => {
        inputRef.current.value = "100"
        inputRef.current.style.color = "red";
        inputRef.current.focus()
    }
    return (
        <div className="App">
            <header className="App-header">
                <h3>Refferencing a variable in React Js</h3>
                <User ref={inputRef} />
                <br/>
                <button onClick={updateInput}>Update Input Box</button>
            </header>

        </div>
    )
}

export default DisplayButton
