import React,{useEffect} from 'react'
import Loginpage from '../component/Login/Loginpage'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/')
        }
    },[])
  return (
    <div>
      <Loginpage/>
    </div>
  )
}

export default Login
