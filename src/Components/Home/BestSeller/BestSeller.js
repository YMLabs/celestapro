import React from 'react'
import ProductCard from '../Deals/ProductCard'

function BestSeller() {
  return (
    <section className="deals-of-the-day p-12 flex items-center">
      <div className="py-8 w-1/5">
        <h2 className="text-5xl py-8 italic">BestSeller</h2>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          See All
        </button>
      </div>
      <div className="flex">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  )
}

export default BestSeller