import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Profile = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

const redirectPath = location.state?.path || '/'
  
  React.useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div className="container text-center ms-auto me-auto my-5 w-25">
      <h2>Profile</h2>
      <div className="card pt-3">
            <div style={{width:'100%', height:'210px'}}>
            <img src={user?.picture} className="card-img-top" alt="..." style={{width:'auto' , height:'60%'}}/>
            </div>
            
            <div className="card-body">
            <h5 className="card-title text-success text-uppercase">{!user ? <Navigate to='/Login' /> : user.username}</h5>
            
            </div>
        </div>
    </div>
  )
}

export default Profile