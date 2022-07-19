import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <section className='hero-section h-96'>
        <div>
            <img src="./assets/images/hero-components/stacked-waves.png" alt=""/>
        </div>
        <div className='flex items-center absolute top-32'>
            <div>
                <img src="./assets/images/hero-components/hero-image.png" alt="" />
            </div>
            <div>
                <img src="./assets/images/hero-components/hero-text.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero