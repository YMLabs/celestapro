import React from 'react'
import banner from "../../../assets/hero-components/banner.png"
function Hero() {
  return (
    <section className='hero-section h-3/4'>
        {/* <div>
            <img src="./assets/images/hero-components/stacked-waves.png" alt=""/>
        </div> */}
        <div className='flex items-center'>
            <img src={banner} alt="" />
        </div>
    </section>
  )
}

export default Hero