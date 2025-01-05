import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import data from '../../utils/slider.json'
export const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>
        <Swiper>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>&#8377;</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>


                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
