import React, {useState} from 'react';
import {Link} from 'react-router-dom'
function Announce() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpen2(false);
    };
    const toggleDropdown2 = () => {
        setIsOpen(false);
        setIsOpen2(!isOpen2);
    };
    return (
        <>
            <div style={{ backgroundColor: '#3187ED' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex pt-2">
                            <i style={{ color: 'white', fontSize: '1.1em' }} className="ri-phone-fill me-2"></i><p className='me-5' style={{color: 'white'}}>+545615 4545</p>
                            <i style={{ color: 'white', fontSize: '1.1em' }} className="ri-mail-fill me-2"></i><p style={{color: 'white'}}>support@gmail.com</p>
                        </div>
                        <div className="col-lg-6 pt-2 d-flex justify-content-end">
                            <i style={{ color: 'white', fontSize: '1.1em' }} className="ri-map-pin-fill me-2"></i><p style={{color: 'white'}}>Location</p>
                            <p className='mx-4'><span className='text-white'>|</span></p>
                            <div className={`dropdown ${isOpen ? 'show' : ''}`}>
                                <span className="dropdown-toggle text-white" type="button" id="dropdownMenu" onClick={toggleDropdown}>
                                    <span style={{color: 'white'}}>$</span> <span className='text-white'>Dollar (US)</span>
                                </span>
                                <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenu">
                                    <li><Link className="dropdown-item" to='/'>Dollar</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Euro</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Pound</Link></li>
                                </ul>
                            </div>
                            <div className={`dropdown ${isOpen2 ? 'show' : ''} ms-5`}>
                                <span className="dropdown-toggle text-white" type="button" id="dropdownMenu" onClick={toggleDropdown2}>
                                    <span style={{color: 'white'}}>EN </span>
                                </span>
                                <ul className={`dropdown-menu ${isOpen2 ? 'show' : ''}`} aria-labelledby="dropdownMenu">
                                    <li><Link className="dropdown-item" to='/'>Mal</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Hindi</Link></li>
                                    <li><Link className="dropdown-item" to='/'>Urdu</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announce
