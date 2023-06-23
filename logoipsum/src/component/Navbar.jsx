import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar({ cart }) {


    const navigate = useNavigate()

    return (

        <div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <h5 className="brand-name text-dark fs-3"><span className='me-3'><img src="/images/vector.png" alt="" srcset="" /><img src="/images/circle.png" alt="" srcset="" /></span>logoipsum</h5>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group p-3">
                                    <input type="search" placeholder="Search your product" className="form-control" />
                                    <button className="btn bg-white border text-primary">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/cart'>
                                        <i className="ri-shopping-bag-line fs-4"></i>
                                        {cart > 0 && (
                                            <span className="badge bg-primary align-middle ms-1">{cart}</span>
                                        )}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>
                                        <i className="ri-heart-line fs-4"></i>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <li className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-user-fill fs-4"></i>
                                    </li>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to='/'><i className="fa fa-user"></i> Profile</Link></li>
                                        <li><Link className="dropdown-item" to='/'><i className="fa fa-list"></i> My Orders</Link></li>
                                        <li><Link className="dropdown-item" to='/'><i className="fa fa-heart"></i> My Wishlist</Link></li>
                                        <li><Link className="dropdown-item" to='/'><i className="fa fa-shopping-cart"></i> My Cart</Link></li>
                                        <li><Link style={{ cursor: 'pointer' }} onClick={() => {
                                            localStorage.removeItem('token')
                                            navigate('/login')
                                        }} className="dropdown-item" ><i className="fa fa-sign-out"></i> Logout</Link></li>
                                    </ul>
                                </li>
                                <li className='nav-item'>
                                <button style={{marginLeft:'10px',backgroundColor:'#00C6D7'}} className='btn text-white rounded shadow mt-2'>classified</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid" style={{ marginLeft: '4%' }}>
                    <Link className="navbar-brand d-block d-sm-block d-md-none d-lg-none" to='/'>
                        logoipsum
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to='/'>All Categories<span><i className="ri-arrow-down-s-line"></i></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>New Arrivals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Featured Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Fashions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Appliances</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Appliances</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Appliances</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
