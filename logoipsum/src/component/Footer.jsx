import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h1><span className='me-1'><img src="/images/vector.png" alt="" srcset="" /><img src="/images/circle.png" alt="" srcset="" /></span> logoipsum</h1>
              <label style={{ color: '#8D8D8D' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </label>
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
                <li><Link to='/'></Link>products</li>
                <li><Link to='/'></Link>classifieds</li>
                <li><Link to='/'></Link>contact us</li>
                <li><Link to='/'></Link>Login</li>
                <li><Link to='/'></Link>Signup</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="single-box">
              <h2>CUSTOMER</h2>
              <ul>
                <li><Link to='/'></Link>My Accounts</li>
                <li><Link to='/'></Link>Orders</li>
                <li><Link to='/'></Link>Tracking List</li>
                <li><Link to='/'></Link>Terms</li>
                <li><Link to='/'></Link>Privacy Policy</li>
                <li><Link to='/'></Link>Return Policy</li>
                <li><Link to='/'></Link>My Cart</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="single-box">
              <h2>VENDER</h2>
              <ul>
                <li><Link to='/'></Link>Partner with us</li>
                <li><Link to='/'></Link>Training</li>
                <li><Link to='/'></Link>procedures</li>
                <li><Link to='/'></Link>Terms</li>
                <li><Link to='/'></Link>Privacy Policy</li>
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
                    <p className='text-primary'>+123 456 789</p>
                  </div>
                  <div className='pt-3 ps-3'>
                    <button className="btn btn-outline-primary">CHAT</button>
                  </div>
                </div>
                {/* <span style={{ color: ' #3187ED', fontSize: '24px', display: 'block', marginTop: '5px', fontSize: 'small', marginLeft: '40px', marginTop: '-15px' }}>+123 456 789</span> */}
              </p>
              <div className='d-flex '>
                <Link to='/' className="btn btn-store">
                  <span className="btn-label">Download on the</span>
                  <span className="btn-caption">App Store</span>
                </Link>
                <Link to='/' className="btn btn-store" style={{ marginLeft: '5px' }}>
                  <span className="fa fa-android fa-3x pull-left"></span>
                  <span className="btn-label">get on the</span>
                  <span className="btn-caption">Google Play</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
