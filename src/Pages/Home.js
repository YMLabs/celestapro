import React from 'react'
import "../Components/Home/Home.css"

import DealsOfTheDay from '../Components/Home/Deals/DealsOfTheDay'
import Hero from '../Components/Home/Hero/Hero'
import Values from '../Components/Home/Values/Values'
import BestSeller from '../Components/Home/BestSeller/BestSeller'
import Catalogue from '../Components/Home/Catalogue/Catalogue'
import Brands from '../Components/Home/Brands/Brands'
import Testimonials from '../Components/Home/Testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Hero/>
        <DealsOfTheDay/>
        <Values/>
        <BestSeller/>
        <Testimonials/>
        <Catalogue/>
        <Brands/>
    </div>
  )
}

export default Home