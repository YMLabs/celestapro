import React from 'react'

function Hero() {
  return (
    <section className='hero-section h-3/4'>
        {/* <div>
            <img src="./assets/images/hero-components/stacked-waves.png" alt=""/>
        </div> */}
        <div className='flex items-center'>
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