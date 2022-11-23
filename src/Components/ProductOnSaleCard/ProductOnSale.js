import React from "react";
import "./ProductOnSale.css"
import Brands from "../../assets/sale/brands.png"
import ProductOnSalePic from "../../assets/sale/ProductOnSalePic.png"

function ProductOnSale() {
  return (
    <div className="productonsale flex border-t-4 border-b-4 border-emerald-200 flex-col items-center rounded-xl shadow-lg hover:shadow-2xl p-4 transition ease-in-out duration-200">
      <div className="flex flex-row items-center justify-between">
        <div className="text-4xl italic font-extrabold">GET UPTO <span className="text-[#3B826A]">90%</span> OFF</div>
        <div className="italic text-right">
            <a href="exampl.com" className="block underline underline-offset-1 cursor-pointer">FILLERS</a>
            <a href="exampl.com" className="block underline underline-offset-1 cursor-pointer">SHAMPOO</a>
            <a href="exampl.com" className="block underline underline-offset-1 cursor-pointer">HAIR GROWTH SERUMS</a>
            <a href="exampl.com" className="block underline underline-offset-1 cursor-pointer">DARK CIRCLE SOLUTIONS </a>
        </div>
      </div>
      <div>
        <img className="h-56" src={ProductOnSalePic} alt="" />
      </div>
      <div>
        <img className="" src={Brands} alt="" />
      </div>
      <div>
        <button className="inline-block px-6 py-2.5 bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">
          Explore More &gt;&gt;&gt;
        </button>
      </div>

    </div>
  );
}

export default ProductOnSale;
