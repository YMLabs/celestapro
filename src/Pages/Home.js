import React from 'react'
import DealsOfTheDay from '../Components/Home/Deals/DealsOfTheDay'
import Hero from '../Components/Home/Hero/Hero'
import "../Components/Home/Hero.css"

function Home() {
  return (
    <div>
        <Hero/>
        <DealsOfTheDay/>
        
    </div>
  )
}

export default Home