import React from 'react'
import DealsOfTheDay from '../Components/Home/Deals/DealsOfTheDay'
import Hero from '../Components/Home/Hero/Hero'
import "../Components/Home/Hero.css"
import Values from '../Components/Values/Values'

function Home() {
  return (
    <div>
        <Hero/>
        <DealsOfTheDay/>
        <Values/>
    </div>
  )
}

export default Home