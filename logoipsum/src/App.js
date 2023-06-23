import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { getCartCount } from './apicalls/Users';




function App() {
  const [cart,setCart] = useState(0);
  useEffect(() => {
    const getcart=async()=>{
      const response = await getCartCount();
      setCart(response.data);
    }
    getcart()
   
  }, []);
  return (

    <div className="App" style={{ overflowX: 'hidden' }}>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route exact path='/cart' element={<Cart setCart={setCart}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
