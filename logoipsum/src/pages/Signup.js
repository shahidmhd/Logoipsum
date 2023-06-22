import React,{useEffect} from 'react'
import Signuppage from '../component/Signup/Signuppage'
import {useNavigate} from 'react-router-dom'
function Signup() {
    const navigate=useNavigate()
     useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/')
        }
     })
  return (
    <div>
      <Signuppage/>
    </div>
  )
}

export default Signup
