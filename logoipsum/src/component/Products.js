
import React, { useEffect, useState } from 'react'
import { Addtocart, getCartCount, stockupdate } from '../apicalls/Users'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Getproduct } from '../apicalls/Users'






const Products = ({ cart, setCart }) => {
    const [products, setproducts] = useState([]);
    const [countRes, setCountRes] = useState(false)

    const getCart = async () => {
        const response = await getCartCount();
        setCart(response.data);
    }


    const Decrementstock = async (productId) => {
        await stockupdate(productId)

        setCountRes(!countRes)
    }


    const addtocart = async (item) => {
        try {

            const response = await Addtocart(item)
            if (response.success) {
                getCart();
                Decrementstock(item._id)
                toast.success(response.message);
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const response = await Getproduct();
            setproducts(response.Data);

        }
        fetchData()
    }, [countRes]);






    return (
        <>
            {/* heading of the component */}
            <div className="mx-5 px-5 pt-4">
                <div className="row">
                    <div className='d-flex justify-content-between'>
                        <div className="fs-3 fw-bolder" style={{ alignSelf: 'flex-start' }}>
                            Best Deals
                        </div>
                        <div className="fs-3 d-none d-md-flex d-lg-flex">
                            views
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-5 mx-lg-5 mx-md-5">
                {products.map((item, index) => {

                    return (
                        <div key={index} className="col-lg-3 col-12 col-md-4 col-sm-6 my-5">
                            <div className="d-flex mx-4" style={{ width: '18rem' }}>
                                <div>
                                    <img style={{ height: '10rem' }} src={item.image} alt="products" />
                                </div>
                                <div>
                                    <p className='fs-7 fw-normal'>{item.name}</p>
                                    <p className='text-primary fw-bold'>${item.price}</p>
                                    <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-line"></i><i className="ri-star-line"></i>
                                    <p className='fs-7 pt-1 fw-normal'>stocks: <span className='text-muted'>{item.stock}</span></p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center me-5 pe-5'>
                                <button onClick={() => {
                                    addtocart(item)
                                }} className="btn btn-info rounded-4 text-light btn-sm">add to cart</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}

export default Products
