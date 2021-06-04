import React from 'react';
import './style.css';
import Picture from '../../Assets/nordwood-themes-kRNZiGKtz48-unsplash.jpg';

function Header() {
    return (
        <div className="header position-relative text-center bg-light">
            <div className="background-img" style={{
                backgroundImage: `url(${Picture})`
            }}>
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">We Are The Future</h1>
                    <p className="lead fw-normal">Come to us for your ambitions in IT, we are here to give you the push you need!</p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block">Hello</div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block">Hello</div>
            </div>
        </div>
    )
}

export default Header;