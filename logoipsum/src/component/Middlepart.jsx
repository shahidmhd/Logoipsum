import React from 'react'

function Middlepart() {
    return (

        <footer className="text-center text-white h-50" style={{ backgroundColor: '#3187ED' }}>
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-auto text-start p-4">
                            <div className="d-flex">
                                <div className='pt-5 pe-5'>
                                    <img src="/images/msgLogo.png" height={80} width={80} alt="msglogo" />
                                </div>
                                <div className="pt-2">
                                    <div className="mb-4 d-flex">
                                        <strong className='fs-2'>Sign up with newsletter</strong>
                                    </div>
                                    <p className='fs-7'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.gdgdfgdfgdf</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 mb-4">
                            <div className="input-group">
                                <input type="search" className="form-control p-3 rounded-4" placeholder="Search" style={{
                                    position: 'relative',
                                    top: 0,
                                    bottom: 0
                                }} aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" style={{
                                    position: 'absolute',
                                    right: '1.7rem',
                                    top: '0.6rem'
                                }} className="btn btn-dark btn-md px-4 py-2 rounded-3 text-white">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-auto text-end">
                        </div>
                    </div>
                </section>
            </div>
        </footer>



    )
}

export default Middlepart