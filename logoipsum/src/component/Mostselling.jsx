import React from 'react';
import './Mostselling.css';
import { ApiTopPropduct } from '../data/Topsellings';

function Mostselling() {
  return (
    <div style={{ backgroundColor: '#F8F8F8' }} className='pb-5'>
      <div className="row px-5">
        <div className="posters" style={{ display: 'flex' }}>
          <div className="px-5 mx-4" style={{ width: '15.5rem' }}>
            <div style={{ width: '15.5rem' }}>
              <p className='fw-bold fs-3'>classified <br />product on<br />the week</p>
            </div>
            <div className='px-3 pb-3 pt-3 d-flex' style={{justifyContent: 'space-between'}}>
              <i className="ri-arrow-left-s-line fw-bolder fs-2 rounded-circle py-1 px-2 border" style={{borderRadius: '10px'}}></i>
              <i className="ri-arrow-right-s-line fw-bolder fs-2 rounded-circle py-1 px-2 border"></i>
            </div>
            <div className='d-flex px-1 pt-4 justify-content-center'>
              <button className='btn btn-lg' style={{ backgroundColor: '#00C6D7', color: 'white' }}>Explore <i className="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
          {/* cards */}
          {ApiTopPropduct.map((item, index) => (
            <div key={index} className="border bg-light rounded-3 mx-4" style={{ width: '15.5rem' }}>
              <div className="img" style={{ width: '15.5rem' }}>
                <img className='rounded-3' style={{ width: '15.5rem', height: '13rem' }} src={item.src} alt="product" />
              </div>
              <div className='px-3 pt-3'>
                <p>Lorem ipsum dolor sit amet acsknsclblasc!ghhjk</p>
              </div>
              <div className='d-flex px-3 pb-3'>
                <span className='text-primary w-50 fw-bold d-flex justify-content-start'>$ 234.09</span>
                <span className='justify-content-end d-flex'>california, dia</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mostselling;
