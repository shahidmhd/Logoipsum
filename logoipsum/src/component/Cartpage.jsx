import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { deletecart, getCartCount, getcartproduct, incrementcount } from '../apicalls/Users'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function Cartpage({setCart}) {

    const [cartproduct, setcartproduct] = useState([])
    const [deleteItem, setDelete] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            const cartproduct = await getcartproduct()
            setcartproduct(cartproduct.data)
        }
        getProduct()

    }, [deleteItem])

    const getCart = async () => {
        const response = await getCartCount();
        setCart(response.data);
    }


    const incrementstock = async (productId) => {
        await incrementcount(productId)
    }

    const deleteproduct = async (cartid, productId) => {
        incrementstock(productId)
        const response = await deletecart(cartid)
        if (response.status) {
            getCart();
            setDelete(!deleteItem)
            toast.success("item deleted");
        }

    }



    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }} >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}
                        >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Cart page</h1>
                                                {/* <h6 className="mb-0 text-muted"></h6> */}
                                            </div>
                                            <hr className="my-4" />


                                            {
                                                cartproduct.map((item, index) => {

                                                    return (

                                                        <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img style={{ width: '100px', height: '100px' }}
                                                                    src={item.image} alt='proimage' />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">Watch</h6>
                                                                <h6 className="text-black mb-0">{item.name}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn  px-2"
                                                                >
                                                                    <i className="ri-subtract-line"></i>
                                                                </button>

                                                                <label className='btn btn-outline-dark text-dark'>{item.quantity}</label>

                                                                <button className="btn  px-2"
                                                                >
                                                                    <i className="ri-add-line"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">€ {item.price}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <label className="text-muted" style={{ cursor: 'pointer' }}>
                                                                    <i onClick={() => (
                                                                        deleteproduct(item._id, item.productId)
                                                                    )} className="ri-delete-bin-7-fill" style={{ marginRight: '5px' }}></i>
                                                                </label>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            }

                                            <hr className="my-4" />
                                            <ToastContainer position="top-left"
                                                autoClose={3000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light" />
                                            <div className="pt-2">
                                                <h6 className="mb-0"><Link to='/' className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">items 3</h5>
                                                <h5>€ 132.00</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Shipping</h5>

                                            <div className="mb-4 pb-2">
                                                <select className="select">
                                                    <option value="1">Standard-Delivery- €5.00</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                    <option value="4">Four</option>
                                                </select>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Give code</h5>

                                            <div className="mb-5">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>€ 137.00</h5>
                                            </div>

                                            <button type="button" className="btn btn-dark btn-block btn-lg"
                                                data-mdb-ripple-color="dark">Register</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cartpage
