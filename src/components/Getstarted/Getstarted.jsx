import React from 'react'
import './Getstarted.css'

const Getstarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Housora</span>
                <span className='secondaryText'>Explore a wide range of properties that match your preferences and budget.</span>
                <span className='secondaryText'>Find your residence soon</span>
                <button className="button">
                    <a href="mailto:himanshudkale@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Getstarted