import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand text-warning" href="#">News Api</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">General</a>
                        </li> */}
                    
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/CounterDisplay">Counter Display</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/product">Set Product Price</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/login">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/register">Register</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" to="/form">Form(useReducer)</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
