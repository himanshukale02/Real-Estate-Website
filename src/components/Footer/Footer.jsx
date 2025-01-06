import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src="logo2.png" alt="" width={125}/>
                <span className="secondaryText">
            Your trusted partner in finding <br />the perfect home.
            </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Address</span>
                <span className='secondaryText'>143 Paradise City, Kharadi, Pune, India</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span >Services</span>
                    <span >Product</span>
                    <span >About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer