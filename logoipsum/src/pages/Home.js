import React from 'react'
import Announce from '../component/Announce'
import Navbar from '../component/Navbar'
import Mainpage from '../component/Mainpage/Mainpage'
import Products from '../component/Products'
import Mostselling from '../component/Mostselling'
import Middlepart from '../component/Middlepart'
import Footer from '../component/Footer'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'



function Home({cart, setCart}) {
    const navigate = useNavigate();
  
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/login')
    }
  })
    return (
      <div className="App" style={{ overflowX: 'hidden' }}>
        <Announce />
        <Navbar cart={cart} />
        <Mainpage />
        <Products cart={cart} setCart={setCart} />
        <Mostselling />
        <Middlepart />
        <Footer />
      </div>
    );
  }
  

export default Home
