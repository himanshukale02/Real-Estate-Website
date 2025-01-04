import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
               {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Your <br />Gateway to <br />Dream Homes</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span>Explore properties based on location, budget, and lifestyle.</span>
                        <span>Experience hassle-free dealings from start to finish.</span>
                    </div>
                    <div className="flexCenter search-bar">
                            <HiLocationMarker color = "var(--blue)" size={25}/>
                            <input type="text" name="" id="" />
                            <button className="button">
                                Search
                            </button>
                        </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span><CountUp start={7800} end={8000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText' >Premium Product</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span><CountUp start={2950} end={3000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span><CountUp end={30}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Cities</span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero