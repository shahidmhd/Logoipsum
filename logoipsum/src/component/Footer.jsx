import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h1>logoipsum</h1>
              <label style={{ color: '#8D8D8D' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </label>
              <h3></h3>
              <div className="card-area">
                <i className="ri-instagram-fill"></i>
                <i className="ri-youtube-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-facebook-fill"></i>
                <i className="ri-linkedin-box-fill"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="single-box">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#"></a>products</li>
                <li><a href="#"></a>classifieds</li>
                <li><a href="#"></a>contact us</li>
                <li><a href="#"></a>Login</li>
                <li><a href="#"></a>Signup</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="single-box">
              <h2>CUSTOMER</h2>
              <ul>
                <li><a href="#"></a>My Accounts</li>
                <li><a href="#"></a>Orders</li>
                <li><a href="#"></a>Tracking List</li>
                <li><a href="#"></a>Terms</li>
                <li><a href="#"></a>Privacy Policy</li>
                <li><a href="#"></a>Return Policy</li>
                <li><a href="#"></a>My Cart</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="single-box">
              <h2>VENDER</h2>
              <ul>
                <li><a href="#"></a>Partner with us</li>
                <li><a href="#"></a>Training</li>
                <li><a href="#"></a>procedures</li>
                <li><a href="#"></a>Terms</li>
                <li><a href="#"></a>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2 style={{ marginLeft: '1px' }}>CONTACT</h2>
              <label style={{ color: '#8D8D8D' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </label>

              <p className="socials">
                <div className='d-flex pt-1'>
                  <div> <i className="ri-customer-service-2-line fs-1"></i></div>
                  <div className="d-block pt-2">
                    <div style={{ color: 'black' }}>Have any question ?</div>
                    <p>+98 579888664665</p>
                  </div>
                  <div className='pt-3 ps-3'>
                    <button className="btn btn-outline-primary">CHAT</button>
                  </div>
                </div>
                {/* <span style={{ color: ' #3187ED', fontSize: '24px', display: 'block', marginTop: '5px', fontSize: 'small', marginLeft: '40px', marginTop: '-15px' }}>+123 456 789</span> */}
              </p>
              <div className='d-flex '>
                <a href="#" className="btn btn-store">
                  <span className="btn-label">Download on the</span>
                  <span className="btn-caption">App Store</span>
                </a>
                <a href="#" className="btn btn-store" style={{ marginLeft: '5px' }}>
                  <span className="fa fa-android fa-3x pull-left"></span>
                  <span className="btn-label">get on the</span>
                  <span className="btn-caption">Google Play</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
