import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../context/AuthApi'
import { AuthContext } from '../context/AuthProvider'

const Login = () => {

    const {user, token, saveAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')

    // React.useEffect(()=>{
    //     console.log({user, token})
    // },[user,token])

    // const [user, setUser] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleChange = (e) =>{
    //     setUser({...user, [e.target.name]: e.target.value})
    //     // console.log(user.email)
    //     // console.log(user.password)
    // }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const doLogin = async () => {
        const res = await login(email, password)
        console.log("Server Res: ",res)
        saveAuth(res.user, res.jwt)
        navigate('/Profile' , {replace:true})
    }

    const submit = (event) => {
        event.preventDefault()
        doLogin()
        // Login(email, password)
        // console.log([user])
        // alert(JSON.stringify(user));
    }
  return (
    <div className='container w-50 my-5 '>
        <h3 className='text-center text-danger'>Sign In </h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                name='email'
                value={email}
                onChange={handleEmail}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name='password'
                value={password}
                onChange={handlePassword}
                />
            </div>
            <div className='d-grid'>
                <button type="submit" className="btn btn-danger">Login</button>
            </div>
                
            </form>
    </div>
  )
}

export default Login