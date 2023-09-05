import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../context/AuthApi'
import { AuthContext } from '../context/AuthProvider'

const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username:'',
        email: '',
        password: '',
        confirmPassword:''
    })
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const doRegister = async () => {
        const res = await register(user.username, user.email, user.password)
        console.log("Server Res: ",res)
        navigate('/login', {replace:true})
    }

    const sendRegister = (event) => {
        event.preventDefault()
        doRegister();
        alert(JSON.stringify(user));
    }
  return (
    <div className='container w-50 my-5 '>
        <h3 className='text-center text-success'>Register </h3>
        <form onSubmit={sendRegister}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="username" 
                aria-describedby="userName"
                name='username'
                value={user.username}
                onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="emailaddress" 
                aria-describedby="emailHelp"
                name='email'
                value={user.email}
                onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                name='password'
                value={user.password}
                onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="confirmPassword"
                name='confirmPassword'
                value={user.confirmPassword}
                onChange={handleChange}
                />
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-success">Register</button>
            </div>
                
            </form>
    </div>
    
  )
}

export default Register